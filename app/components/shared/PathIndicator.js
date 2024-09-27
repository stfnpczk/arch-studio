"use client";
import { usePathname } from "next/navigation";

export default function PathIndicator() {
  const pathname = usePathname();

  const formattedPathname =
    pathname === "/"
      ? "HOME"
      : pathname === "/about"
        ? "ABOUT US"
        : pathname.substring(1).toUpperCase();

  return (
    <div className="hidden md:block">
      <span className="absolute left-[-3.125rem] top-0 h-[6.5rem] w-px bg-lightGrey xl:left-[clamp(-4.5vw,-5.556vw,-5rem)]"></span>

      <span className="left-[-3.125rem] top-[6.5rem] -translate-x-1/2 whitespace-nowrap pt-[3rem] text-[1.25rem] font-medium tracking-[1.125rem] text-lightGrey [writing-mode:vertical-rl] md:absolute xl:absolute xl:left-[clamp(-4.5vw,-5.556vw,-5rem)]">
        {formattedPathname}
      </span>
    </div>
  );
}
