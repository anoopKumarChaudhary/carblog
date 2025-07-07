"use client";

import NewsletterSubscribe from "@/app/footer/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {" "}
      {children}
      <NewsletterSubscribe />
    </div>
  );
}
