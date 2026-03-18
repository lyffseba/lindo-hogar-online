# Google Cloud Platform (GCP) Infrastructure

Lindo Hogar Online is fully integrated with Google Cloud services, managed entirely via the terminal (Google Cloud Shell or local `gcloud` CLI) for Infrastructure as Code (IaC) and deployments.

## Core GCP Architecture

1. **Frontend Hosting (Next.js 15 App Router)**
   - **Service:** Google Cloud Run
   - **Why:** Cloud Run natively supports Docker containers, making it the perfect serverless platform for Next.js SSR and API routes. It scales to zero and scales out instantly during high traffic.
   - **Deployment:** Handled via Google Cloud Build (CI/CD) and Docker.

2. **Database & Data Storage**
   - **Catalog & Orders:** Google Cloud SQL for PostgreSQL. We use the **`db-f1-micro`** tier for extreme cost-effectiveness (best price-to-value ratio for a startup) while still getting robust, ACID-compliant relational data storage. We interact with it using **Drizzle ORM** for maximum type-safety and minimal bundle size.
   - **Product Media:** Google Cloud Storage (GCS) buckets for all images, served via Cloud CDN for ultra-fast global delivery (heavily leveraging the free tier).
   - **Session & Caching (State):** Firebase Realtime Database or Next.js Native Caching. By avoiding expensive fixed-cost services like Cloud Memorystore (Redis), we get serverless scale-to-zero capabilities for cart state storage, fitting perfectly within the Firebase free tier.

3. **Event-Driven Async Systems**
   - **Message Broker:** Google Cloud Pub/Sub
   - **Why:** Essential for decoupled e-commerce workflows. For example, when an order is placed, a Pub/Sub event is triggered. Background Cloud Functions or detached Cloud Run workers listen to these events to process payments, send confirmation emails, and update inventory independently without blocking the user's checkout flow.

4. **Authentication & User Sessions**
   - **Service:** Firebase Authentication (Google Identity Platform)
   - **Why:** Seamless Google sign-in integration, secure session management, and JWT validation.

5. **Analytics & Logging**
   - **Logs:** Cloud Logging
   - **Traffic & Events:** Google Analytics 4 (GA4) + Google Tag Manager.

## Terminal Cloud Management (Cloud Shell)

To deploy and manage this infrastructure, we use the `gcloud` CLI. You can run these commands directly in [Google Cloud Shell](https://shell.cloud.google.com/).

### Initialization Script

A `gcp-setup.sh` script is provided in the root directory to automatically provision the required resources:

1. Enable necessary APIs (Cloud Run, Cloud Build, Cloud SQL).
2. Create the Cloud Storage buckets.
3. Set up the IAM service accounts.
