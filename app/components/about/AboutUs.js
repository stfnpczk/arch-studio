import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";
import mobileImgHero from "@/public/about/mobile/image-hero.jpg";
import tabletImgHero from "@/public/about/tablet/image-hero.jpg";
import desktopImgHero from "@/public/about/desktop/image-hero.jpg";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-[91.45%_8.55%] grid-rows-[12.1875rem_2.8125rem_17.8125rem] md:grid-cols-[10.12%_21.47%,68.41%] md:grid-rows-[12.75rem_5.3125rem_7.1875rem_19.75rem] lg:grid-cols-[24.05%_17.84%_15.32%_42.72%] lg:grid-rows-[8.125rem_5.4375rem_7.0625rem_24.375rem]">
      <div className="relative -z-10 col-[1/3] row-[1/3] w-full md:col-[1/4] md:row-[1/5] lg:col-[1/4] lg:row-[1/6]">
        <ResponsiveNextImage
          mobileImgSrc={mobileImgHero}
          tabletImgSrc={tabletImgHero}
          desktopImgSrc={desktopImgHero}
          alt="person typing on a laptop"
        />
        <span className="absolute left-0 top-0 h-full w-full bg-greyLayer"></span>
      </div>

      <span className="col-[2/4] row-[2/4] hidden text-150xl/200 md:z-10 md:ml-auto md:block md:font-bold md:tracking-[-0.1875rem] md:text-veryLightGrey lg:col-[3/4] lg:row-[2/4] lg:ml-0 lg:text-[clamp(10.6875rem,16.699vw,16.699vw)] lg:leading-200 xl:text-250xl xl:leading-200">
        About
      </span>
      <div className="col-[1/2] row-[2/3] bg-white pl-8 pt-16 md:col-[2/4] md:row-[3/5] md:pt-20 lg:col-[3/5] lg:row-[3/6] lg:pl-[clamp(4.3125rem,6.738vw,6.738vw)] lg:pt-44 xl:pl-[clamp(10.625rem,11.806vw,11.5625rem)]">
        <div className="md:mb-18 md:w-16 md:border-t md:border-t-lightGrey"></div>
        <div>
          <h3 className="text-5xl/13 tracking-[-0.075rem] md:text-7xl/16 md:tracking-[-0.125rem]">
            Your team of <span className="block">professionals</span>
          </h3>
          <p className="mt-5 text-lg/6 font-medium text-darkGrey md:mt-9 md:text-lg/6">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </div>
  );
}
