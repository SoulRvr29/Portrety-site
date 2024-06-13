import { Lato, Caveat } from "next/font/google";
import "./globals.css";
import "./css/scrollbar.css";
import "./css/tables.css";
import "./css/loader.css";
import "./css/gallery.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";
import "react-photo-view/dist/react-photo-view.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

const pacifico = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Portrety ze zdjęcia",
  description: "Portrety ze zdjęcia na zamówienie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${lato.variable} ${pacifico.variable}`}>
      <body className="relative bg-light-bkg text-light-text dark:bg-dark-bkg dark:text-dark-text dark:bg-opacity-95 mx-auto border-x-2 border-light-accent dark:border-dark-accent min-h-dvh grid ">
        <Header />
        {children}
        <Footer />
        <GoUp />
      </body>
    </html>
  );
}
