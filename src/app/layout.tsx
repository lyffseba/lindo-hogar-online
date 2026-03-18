import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents iOS input zoom on forms
  userScalable: false,
  themeColor: '#ffffff', // Ensures the iPhone 15 dynamic island/status bar blends perfectly
};

export const metadata: Metadata = {
  title: 'Lindo Hogar Online',
  description: 'Muebles y decoración de calidad para transformar tu hogar.',
  appleWebApp: {
    capable: true,
    title: 'Lindo Hogar',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
