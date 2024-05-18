"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import "../styles/index.css";


export default function RootLayout({ children }: ChildrenProp) {

  return (
    <html suppressHydrationWarning lang="en">
      <meta
        name="google-site-verification"
        content="ivAhSvGEQjHzD18jEhiEErqxCD2fGGfRK064RiUuut8"
      />
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { ChildrenProp } from "@/types";import { useRouter } from "next/router";

