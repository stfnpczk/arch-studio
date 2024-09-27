import Image from "next/image";
import imageWelcome from "@/public/home/desktop/image-welcome.jpg";
export default function WelcomeText() {
  return (
    <div className="mb-28 px-[2.0625rem] pt-[8.125rem] md:mb-56 md:px-0 xl:mb-[12.5rem] xl:grid xl:grid-flow-col xl:grid-cols-[64.47%_20.30%_15.23%] xl:grid-rows-[5.4375rem_7.0625rem_29.6875rem]">
      <div className="mb-18 w-16 border-t border-lightGrey md:hidden"></div>
      <h2 className="hidden tracking-[-0.1875rem] text-veryLightGrey md:m-0 md:mb-0 md:block md:p-0 md:text-[9.5625rem] md:font-bold md:leading-[0.75] xl:z-10 xl:col-[1/3] xl:row-[1/3] xl:text-[clamp(15.625rem,17.361vw,16.875rem)] xl:tracking-[-0.3125rem]">
        Welcome
      </h2>

      <div className="xl:col-[1] xl:row-[3] xl:mx-auto xl:max-w-[27.875rem]">
        <h3 className="max-w-[20.3125rem] text-5xl/13 tracking-[-0.1069rem] md:max-w-[27.875rem] md:text-7xl/16 xl:text-7xl/none">
          Welcome to Arch Studio
        </h3>
        <div>
          <p className="mb-6 mt-6 text-lg/6 text-darkGrey">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="my-6 mb-6 text-lg/6 text-darkGrey">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-lg/6 text-darkGrey">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>

      <div className="hidden xl:relative xl:col-[2/4] xl:row-[2/4] xl:block">
        <Image
          src={imageWelcome}
          alt="reflective glass facade"
          sizes="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          priority
        />
      </div>
    </div>
  );
}
