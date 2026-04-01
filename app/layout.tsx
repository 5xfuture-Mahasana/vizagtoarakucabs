import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
