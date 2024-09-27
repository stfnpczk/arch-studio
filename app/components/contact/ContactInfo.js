import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";
import mobileImgHero from "@/public/contact/mobile/image-hero.jpg";
import tabletImgHero from "@/public/contact/tablet/image-hero.jpg";
import desktopImgHero from "@/public/contact/desktop/image-hero.jpg";

export default function ContactInfo() {
  return (
    <div className="grid grid-flow-col grid-cols-[91.45%_8.55%] grid-rows-[12.1875rem_2.8125rem_17.8125rem] pb-16 md:grid-cols-[10.12%_21.47%,68.41%] md:grid-rows-[12.75rem_5.3125rem_7.1875rem_19.75rem] md:p-0 lg:grid-cols-[24.05%_17.84%_15.32%_42.72%] lg:grid-rows-[8.125rem_5.4375rem_7.0625rem_24.375rem]">
      <div className="relative -z-10 col-[1/3] row-[1/3] w-full md:col-[1/4] md:row-[1/5] lg:col-[1/4] lg:row-[1/6]">
        <ResponsiveNextImage
          className="absolute inset-0"
          mobileImgSrc={mobileImgHero}
          tabletImgSrc={tabletImgHero}
          desktopImgSrc={desktopImgHero}
          alt="vintage black rotary dial telephone"
        />
        <span className="absolute left-0 top-0 h-full w-full bg-greyLayer"></span>
      </div>

      <span className="col-[2/4] row-[2/4] hidden text-150xl md:z-10 md:ml-auto md:block md:font-bold md:tracking-[-0.1875rem] md:text-veryLightGrey lg:col-[2/4] lg:row-[2/4] lg:ml-0 lg:text-[clamp(11rem,17.188vw,17.188vw)] lg:leading-200 xl:text-200xl">
        Contact
      </span>
      <div className="col-[1/2] row-[2/3] bg-white pl-8 pt-16 md:col-[2/4] md:row-[3/5] md:pl-[clamp(2rem,4.167vw,4.167vw)] md:pt-20 lg:col-[3/6] lg:row-[3/6] lg:pl-[clamp(4.3125rem,6.738vw,6.738vw)] lg:pt-44 xl:pl-[clamp(10.625rem,11.806vw,10.625rem)]">
        <div className="md:mb-18 md:w-16 md:border-t md:border-lightGrey"></div>
        <div>
          <h3 className="text-5xl/13 tracking-[-0.075rem] md:text-7xl/16 md:tracking-[-0.125rem] lg:max-w-[23.0625rem] lg:text-7xl">
            Tell us about your project
          </h3>
          <p className="mt-5 text-lg/6 font-medium text-darkGrey md:mt-9 md:text-lg/6">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </div>
  );
}
