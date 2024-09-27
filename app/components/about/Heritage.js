import Image from "next/image";
import imageHeritage from "@/public/about/desktop/image-heritage.jpg";

export default function Heritage() {
  return (
    <div className="mt-16 px-8 md:mt-52 md:px-0 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
      <div>
        <div className="mb-18 w-[4.0625rem] border-t border-lightGrey"></div>

        <h3 className="text-5xl/13 tracking-[-0.075rem] md:text-7xl/16 md:tracking-[-0.125rem]">
          {" "}
          Our <span className="block">Heritage</span>
        </h3>

        <p className="mt-6 text-lg font-medium leading-6 text-darkGrey">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>

        <p className="mt-6 text-lg font-medium leading-6 text-darkGrey">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>

        <p className="mt-6 text-lg font-medium leading-6 text-darkGrey">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>

      <div className="hidden lg:relative lg:inline-flex lg:h-[35.5rem] lg:w-full">
        <Image
          src={imageHeritage}
          alt="glass facade"
          sizes="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "568px",
          }}
          width={350}
          height={568}
          priority
        />
      </div>
    </div>
  );
}
