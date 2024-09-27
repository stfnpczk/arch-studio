import Link from "next/link";

export default function CtaLink({ text, link, width }) {
  return (
    <Link
      className={`z-10 flex justify-center ${width} gap-6 bg-veryDarkBlue px-8 py-6 text-center text-lg/6 font-bold text-white transition-all duration-300 ease-in-out hover:bg-darkGrey`}
      href={link}
      passHref={true}
    >
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
        <g fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeWidth="2">
          <path d="M15 1l9 9-9 9M0 10h24" />
        </g>
      </svg>
    </Link>
  );
}
