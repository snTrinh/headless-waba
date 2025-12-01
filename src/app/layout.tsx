// src/app/layout.tsx
import "./globals.css"; // optional global CSS
import Layout from "../components/layout/Layout";

export const metadata = {
  title: "Western Alberta Bouldering Association",
  description: "Headless WordPress climbing site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
