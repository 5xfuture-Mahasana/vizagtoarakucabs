import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Vizag to Araku Cabs | Taxi Fare ₹3499 | Best Cab Service',
  description: 'Book Vizag to Araku cabs at best price ₹3499. Safe and reliable taxi service with experienced drivers. Call now for instant booking.',
  keywords: 'Vizag to Araku Cabs, Vizag to Araku taxi, Vizag to Araku cab service, Vizag to Araku fare, Vizag to Araku one way cab',
  openGraph: {
    title: 'Vizag to Araku Cabs | Taxi Fare ₹3499 | Best Cab Service',
    description: 'Book Vizag to Araku cabs at best price ₹3499. Safe and reliable taxi service with experienced drivers. Call now for instant booking.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Layout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
