import Header from "@/app/_components/Header";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josephins = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "The Wild Oasis",
    template: "%s | The Wild Oasis",
  },
  description: `Luxurious cabin hotels, located in the heart of the italian Dolomites , sorrounded by beautiful mountains and dark forests `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josephins.className} antialiased text-primary-100 bg-primary-950 min-h-screen flex flex-col  `}
      >
        <Header />
        <div className="flex-1 sm:px-8 px-4 sm:py-12 py-6 grid ">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
