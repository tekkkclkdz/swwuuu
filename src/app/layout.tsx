import type { Metadata } from "next";
import { Genos } from "next/font/google";
import "./globals.css";
import { MailIcon } from "@heroicons/react/solid";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'; // Nowa ikona maila

const genos = Genos({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "swwuuu",
  description: "swwuuu portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="shortcut icon" href="./favicon.ico" />
      <body className={`${genos.className} flex flex-col min-h-screen`}>
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-black w-full h-32 sm:h-48 flex justify-center items-center">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/maaxantoine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-10 h-10 text-white hover:text-gray-400 transition-colors" />
            </a>
            <a href="mailto:maxantoine.swu@gmail.com">
              <HiOutlineMail className="w-10 h-10 text-white hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
