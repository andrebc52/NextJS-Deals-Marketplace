import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deals Marketplace",
  description: "Your Business Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <SubHeader />
        <section className="w-full px-8 text-gray-700 bg-white mb-5">
          <div className="container flex flex-col flex-wrap items-center1 justify-between1 py-5 mx-auto md:flex-row max-w-7xl">
            <div className="flex h-full w-3/4 rounded-md">
              <main className="flex-1">{children}</main>
            </div>
            <div className="flex h-full w-1/4 bg-gray-50 rounded-md">
              <Sidebar />
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
