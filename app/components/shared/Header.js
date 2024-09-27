"use client";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import Link from "next/link";
import closeIcon from "@/public/icons/icon-close.svg";
import hamburgerIcon from "@/public/icons/icon-hamburger.svg";
import PathIndicator from "./PathIndicator";
import Image from "next/image";
import logo from "@/public/logo.svg";
import React, { useState } from "react";
import ModalHamburger from "./ModalHamburger";

export default function Header() {
  const windowSize = useWindowWidth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative mx-auto flex max-w-[var(--max-width-layout-mobile)] flex-col md:max-w-[var(--max-width-layout-tablet)] xl:max-w-[var(--max-width-layout-desktop)]">
      <PathIndicator />
      <div className="flex items-baseline justify-between p-8 md:items-center md:justify-start md:gap-20 md:px-0 md:py-14">
        <div className="h-[2rem] w-[4.8125rem] md:h-10 md:w-24">
          <Link href="/" aria-label="Home">
            <Image
              className="h-8 w-[4.5rem] md:h-10 md:w-24"
              src={logo}
              alt="logo arch studio"
              width={72}
              height={32}
              priority
            />
          </Link>
        </div>
        {windowSize.width >= 768 ? (
          // tablet/desktop navigation
          <nav
            className="hidden md:block"
            role="navigation"
            aria-label="header navigation"
          >
            <ul className="flex gap-16">
              <li className="relative">
                <Link
                  className={`text-lg font-bold ${
                    pathname === "/portfolio"
                      ? "text-veryDarkBlue"
                      : "text-mediumGrey"
                  } transition-colors hover:text-veryDarkBlue`}
                  href="/portfolio"
                >
                  Portfolio
                </Link>

                {pathname === "/portfolio" && (
                  <span className="absolute bottom-[-0.375rem] left-1/2 w-6 -translate-x-1/2 border-b border-b-veryDarkBlue"></span>
                )}
              </li>
              <li className="relative">
                <Link
                  className={`text-lg font-bold ${
                    pathname === "/about"
                      ? "text-veryDarkBlue"
                      : "text-mediumGrey"
                  } transition-colors hover:text-veryDarkBlue`}
                  href="/about"
                >
                  About Us
                </Link>
                {pathname === "/about" && (
                  <span className="absolute bottom-[-0.375rem] left-1/2 w-6 -translate-x-1/2 border-b border-b-veryDarkBlue"></span>
                )}
              </li>
              <li className="relative">
                <Link
                  className={`text-lg font-bold ${
                    pathname === "/contact"
                      ? "text-veryDarkBlue"
                      : "text-mediumGrey"
                  } transition-colors hover:text-veryDarkBlue`}
                  href="/contact"
                >
                  Contact
                </Link>
                {pathname === "/contact" && (
                  <span className="absolute bottom-[-0.375rem] left-1/2 w-6 -translate-x-1/2 border-b border-b-veryDarkBlue"></span>
                )}
              </li>
            </ul>
          </nav>
        ) : (
          // mobile navigation
          <div className="cursor-pointer md:hidden">
            <button onClick={toggleMenu}>
              <Image
                src={isOpen ? closeIcon : hamburgerIcon}
                width={24}
                height={17}
                alt="toggle open/close menu"
              />
            </button>
            <ModalHamburger
              className="flex"
              onClose={() => setIsOpen(false)}
              open={isOpen}
            >
              <div>
                <div className="flex items-baseline justify-between bg-white p-8">
                  <div className="h-[2rem] w-[4.8125rem] md:h-10 md:w-24">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      aria-label="Return Home"
                    >
                      <Image
                        width={77}
                        height={32}
                        src={logo}
                        alt="logo arch studio"
                        priority
                      />
                    </Link>
                  </div>
                  <div>
                    <button onClick={toggleMenu}>
                      <Image
                        src={isOpen ? closeIcon : hamburgerIcon}
                        width={24}
                        height={17}
                        alt="toggle open/close menu"
                      />
                    </button>
                  </div>
                </div>
                <ul className="flex flex-col items-center gap-6 px-12 py-10">
                  <li className="text-3xl/10 font-bold text-veryDarkBlue">
                    <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="text-3xl/10 font-bold text-veryDarkBlue">
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li className="text-3xl/10 font-bold text-veryDarkBlue">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </ModalHamburger>
          </div>
        )}
      </div>
    </header>
  );
}
