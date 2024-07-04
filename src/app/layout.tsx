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
    <html lang="en">
      <body className={genos.className}>{children}
        <footer>
          <div className="h-96 bg-black w-full">
            <div className="grid grid-flow-row text-3xl gap-8 ml-20 mt-8">
            <a href="/model">Managment</a>
            <h1>3sswwuu@gmail.com</h1>
            <Link href="https://www.instagram.com/3sswwuu/" className="hover:underline">@3sswwuu</Link>
            <Link href="https://www.mathiaskarlgontard.com/" className="hover:underline">Mathias Karl Gontard</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
