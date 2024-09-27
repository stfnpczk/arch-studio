import Link from "next/link";
import CtaLink from "./CtaLink";
import Image from "next/image";
import logo from "@/public/logo-white.svg";

export default function Footer() {
  return (
    <footer className="max-w-[var(--max-width-layout-mobile] mx-auto mt-18 flex flex-col md:mt-52 md:max-w-none xl:mt-40 xl:max-w-[var(--max-width-layout-desktop)]">
      <div className="relative flex flex-col items-center gap-8 px-16 pb-12 md:flex-row md:justify-between md:p-0">
        <span className="absolute bottom-0 left-0 -z-10 h-[86.5%] w-full bg-veryLightGrey md:h-[7.5rem] md:w-[85.5%] xl:h-[12.5rem] xl:w-[88.5%]"></span>
        <div className="flex h-[7.5rem] w-[7.5rem] items-center justify-center bg-veryDarkBlue xl:h-[12.5rem] xl:w-[12.5rem]">
          <Link href="/" aria-label="Return Home">
            <Image
              className="h-6 w-14 xl:h-10 xl:w-24"
              src={logo}
              alt="logo arch studio"
              width={56}
              height={24}
              priority
            />
          </Link>
        </div>
        <nav role="navigation">
          <ul className="flex flex-col gap-8 md:flex-row">
            <li>
              <Link
                className="text-lg/6 font-bold text-mediumGrey transition-colors hover:text-veryDarkBlue"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="text-lg/6 font-bold text-mediumGrey transition-colors hover:text-veryDarkBlue"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-lg/6 font-bold text-mediumGrey transition-colors hover:text-veryDarkBlue"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <CtaLink
          text="See our Portfolio"
          link="/portfolio"
          width="w-full md:w-[clamp(15.75rem,32.813vw,21.875rem)]"
        />
      </div>
    </footer>
  );
}
