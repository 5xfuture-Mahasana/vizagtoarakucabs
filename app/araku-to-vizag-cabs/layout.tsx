import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Araku to Vizag Cabs | Book Taxi at ₹3499 | Fast & Safe Ride',
  description: 'Book Araku to Vizag cabs at best price ₹3499. Safe, reliable taxi service with experienced drivers. Call now for instant booking.',
  keywords: 'Araku to Vizag cabs, Araku to Vizag taxi, Araku to Vizag cab service, Araku to Vizag one way cab, Araku to Vizag fare',
  openGraph: {
    title: 'Araku to Vizag Cabs | Book Taxi at ₹3499 | Fast & Safe Ride',
    description: 'Book Araku to Vizag cabs at best price ₹3499. Safe, reliable taxi service with experienced drivers. Call now for instant booking.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
