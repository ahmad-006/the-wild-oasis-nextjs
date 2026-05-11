import { Josefin_Sans } from 'next/font/google';
import './globals.css';

import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';

const josephineSans = Josefin_Sans({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josephineSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <main className="max-w-7xl mx-auto w-full">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
      </body>
    </html>
  );
}
