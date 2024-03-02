import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Management",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
