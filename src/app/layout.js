import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import HamburgerMenu from "@/components/hamburgerMenu";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali's Portfolio",
  description: "Ali Mohammadi's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HamburgerMenu />
        <TransitionProvider >{children}</TransitionProvider>
        
      </body>
    </html>
  );
}
