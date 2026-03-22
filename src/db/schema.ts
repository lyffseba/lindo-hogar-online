import { pgTable, text, timestamp, boolean, uuid, primaryKey, integer } from 'drizzle-orm/pg-core';
import type { AdapterAccountType } from "next-auth/adapters";

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name'),
  email: text('email').unique().notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  role: text('role').default('customer').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const accounts = pgTable("accounts", {
    userId: uuid("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state")
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] })
  ]
)

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: uuid("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull()
})

export const verificationTokens = pgTable("verificationToken", {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })]
)

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  price: text('price').notNull(), 
  imageUrl: text('image_url'),
  inventory: integer('inventory').notNull().default(0),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  customerName: text('customer_name').notNull(),
  customerPhone: text('customer_phone').notNull(),
  customerAddress: text('customer_address').notNull(),
  customerCity: text('customer_city').notNull(),
  totalAmount: text('total_amount').notNull(),
  status: text('status').default('pending').notNull(), // pending, paid, shipped, delivered, cancelled
  shippingMethod: text('shipping_method').default('pickup').notNull(), 
  trackingUrl: text('tracking_url'),
  deliveryTaskId: text('delivery_task_id'),
  stripeSessionId: text('stripe_session_id'),
  mercadopagoId: text('mercadopago_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
