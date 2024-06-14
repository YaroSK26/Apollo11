import { Inter } from "next/font/google";
import "../css/globals.css";
import "../css/hero.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apollo 11 |  Mission",
  description: "Education about Apollo 11 mission",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
