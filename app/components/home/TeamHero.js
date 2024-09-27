import mobileHeroImage from "../../../public/home/mobile/image-small-team.jpg";
import tabletHeroImage from "../../../public/home/tablet/image-small-team.jpg";
import desktopHeroImage from "../../../public/home/desktop/image-small-team.jpg";

import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";
import CtaLink from "../shared/CtaLink";

export default function TeamHero() {
  return (
    <div className="max-w relative flex h-[35rem] w-auto flex-col px-8 py-44 md:px-[clamp(3.625rem,7.552vw,11.875rem)] md:py-40 xl:pl-48">
      <h3 className="z-10 mb-6 text-wrap text-5xl/13 font-bold tracking-[0.075rem] text-white md:text-7xl">
        {" "}
        Small team, <span className="z-10 block">big ideas</span>
      </h3>

      <CtaLink text="About us" link="/about" width="w-[fit-content]" />

      <ResponsiveNextImage
        className="z-0"
        mobileImgSrc={mobileHeroImage}
        tabletImgSrc={tabletHeroImage}
        desktopImgSrc={desktopHeroImage}
        alt="Modern white geometric buildings over calm blue water."
      />
      <span className="absolute left-0 top-0 h-full w-full bg-[rgba(0,_0,_0,_0.55)]"></span>
    </div>
  );
}
