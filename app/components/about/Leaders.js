import { leaders } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import linkedinIcon from "@/public/icons/icon-linkedin.svg";
import twitterIcon from "@/public/icons/icon-twitter.svg";

export default function Leaders() {
  return (
    <div className="mt-28 px-8 md:mb-9 md:mt-52 md:px-0 xl:flex xl:gap-40">
      <div>
        <h3 className="mb-14 text-5xl/13 tracking-[-0.1069rem] md:text-7xl/16 md:tracking-[-0.125rem]">
          {" "}
          The <span className="block">Leaders</span>
        </h3>
      </div>
      <ul className="grid gap-20 md:w-full md:grid-cols-[1fr_1fr] md:gap-x-[clamp(0.6875rem,1.432vw,1.432vw)] md:gap-y-[6.5rem] xl:gap-x-8 xl:gap-y-[4.5rem]">
        {leaders.map((leader, index) => (
          <li key={index}>
            <div className="group relative h-[clamp(17.75rem,75.733vw,28.75rem)] w-auto md:h-[clamp(17.5rem,36.458vw,20.3125rem)] xl:h-[clamp(18.75rem,22.222vw,21.625rem)]">
              <Image
                src={leader.imgSrc}
                alt={leader.name}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
                priority
              />

              <span className="absolute left-0 top-0 h-full w-full origin-center scale-0 transform bg-[rgba(0,_0,_0,_0.4)] transition-transform duration-500 ease-in-out group-hover:scale-100"></span>

              <div className="absolute flex h-full w-full scale-0 transform items-center justify-center gap-8 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100">
                <Link href="https://www.linkedin.com" passHref={true}>
                  <Image src={linkedinIcon} alt="link to linkedin page" />
                </Link>
                <Link href="https://www.twitter.com" passHref={true}>
                  <Image src={twitterIcon} alt="link to twitter page" />
                </Link>
              </div>
            </div>

            <span className="mt-4 block text-3xl/10 font-bold">
              {leader.name}
            </span>
            <span className="block text-lg/6">{leader.position}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
