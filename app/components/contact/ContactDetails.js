import Link from "next/link";
import { offices } from "@/app/data/data";

export default function ContactDetails() {
  return (
    <div className="mb-18 px-8 md:px-0 xl:mb-48">
      <span className="mb-[4.5rem] block w-16 border-t border-lightGrey md:mt-52 xl:mb-18 xl:block"></span>
      <div className="mt-18 md:px-0 xl:mt-0 xl:flex xl:justify-between">
        <h3 className="text-5xl/13 tracking-[-0.075rem] md:text-7xl/16 md:tracking-[-0.125rem]">
          Contact <span className="block"> Details</span>
        </h3>
        {offices.map((office, index) => (
          <div
            key={index}
            className="mt-10 md:flex md:justify-between xl:mt-0 xl:flex-col"
          >
            <address>
              <span className="mb-3 block text-lg/9 font-bold text-darkGrey">
                {office.heading}
              </span>
              <span className="block text-lg/6 font-medium text-darkGrey">
                Mail : {office.mail}
              </span>
              <span className="block text-lg/6 font-medium text-darkGrey">
                Address : {office.address}
              </span>
              <span className="block text-lg/6 font-medium text-darkGrey">
                Phone : {office.phone}
              </span>
            </address>
            <Link
              className="mt-11 flex w-fit gap-6 md:mt-0 md:self-center xl:mt-14 xl:self-start"
              href="#map"
            >
              <span className="text-lg/6 font-bold text-veryDarkBlue">
                View on Map
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#1b1d23"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
