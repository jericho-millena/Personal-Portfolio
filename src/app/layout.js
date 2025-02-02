import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
