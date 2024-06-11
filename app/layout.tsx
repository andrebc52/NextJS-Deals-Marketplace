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

interface RootLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function RootLayout({
  children,
  showSidebar = true,
}: RootLayoutProps) {
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
        <section className="w-full px-8 text-gray-700 bg-white pb-20">
          <div className="container flex flex-col md:flex-row py-5 mx-auto max-w-7xl">
            <main className={showSidebar ? "flex-1 md:w-3/4" : "flex-1 w-full"}>
              {children}
            </main>
            {showSidebar && (
              <aside className="divSidebar w-full md:w-1/4 bg-gray-50 rounded-md">
                <Sidebar />
              </aside>
            )}
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
