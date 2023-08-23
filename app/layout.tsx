"use client";

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/shared/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
  title: "Anime Taste",
  description: "Anime reviews and recommendations",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
