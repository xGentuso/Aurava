import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import ClientLayout from './components/ClientLayout';
import { metadata } from './metadata';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://proventa.health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0891b2" />
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </head>
      <body className="bg-white">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics debug={true} mode="production" />
      </body>
    </html>
  );
}
