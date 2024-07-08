"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import Topbar from "@/components/topbar/Topbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favi-logo.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className}`}>
        <div className={`grid lg:grid-cols-[250px_minmax(0,1fr)]`}>
          <div
            onClick={() => setSidebarVisible(false)}
            className={`
              fixed inset-0 bg-black_242731 bg-opacity-50 z-50 transition-transform transform lg:relative lg:z-auto lg:translate-x-0
              ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
              `}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`
              fixed top-0 left-0 min-h-full w-4/6 bg-white dark:bg-black_282A36 shadow-lg transition-transform transform 
              lg:relative lg:shadow-none lg:translate-x-0 lg:w-full
              ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <Sidebar />
            </div>
          </div>
          <div className="flex-1">
            <Topbar toggleSidebar={toggleSidebar} />
            <div className="px-[30px] py-[15px] bg-gray_F9F9F9 dark:bg-black_242731">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
