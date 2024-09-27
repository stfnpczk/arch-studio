import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const leagueSpartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Arch Studio Multi-Page Website",
  description:
    "This is a solution to the Arch Studio multi-page website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.'",
};

export default function RootLayout({ children }) {
  return (
    <html className={leagueSpartan.className} lang="en">
      <body>
        <Header />
        <main className="mx-auto flex max-w-[525px] flex-col md:max-w-[var(--max-width-layout-tablet)] xl:max-w-[var(--max-width-layout-desktop)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
