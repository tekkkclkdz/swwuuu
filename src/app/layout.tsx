import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Genos } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={`${genos.className} flex flex-col min-h-screen`}>
        <main className="">{children}</main>
        <footer className=" bg-black w-full h-60 sm:h-96">
          <div className="grid grid-flow-row text-xl sm:text-3xl gap-4 sm:gap-8 ml-2 sm:ml-20 mt-4 sm:mt-8 text-white">
            <a href="/model">Managment</a>
            <h1>3sswwuu@gmail.com</h1>
            <Link href="https://www.instagram.com/3sswwuu/" className="hover:underline">@3sswwuu</Link>
            <Link href="https://www.mathiaskarlgontard.com/" className="hover:underline">Mathias Karl Gontard</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}