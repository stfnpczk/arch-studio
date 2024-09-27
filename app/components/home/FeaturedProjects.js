import { featuredProjects } from "@/app/data/data";

import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";
import CtaLink from "../shared/CtaLink";

export default function FeaturedProjects() {
  return (
    <div className="mt-18 px-8 md:mt-52 md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto] md:items-center md:gap-y-20 md:px-0 md:[grid-template-areas:'heading_link'_'image_image']">
      <h3 className="mb-8 text-5xl/13 tracking-[-0.1069rem] md:mb-0 md:text-7xl/16 md:tracking-[-0.125rem] md:[grid-area:heading]">
        Featured
      </h3>

      <ul className="mb-6 flex flex-col gap-6 md:[grid-area:image] xl:flex-row xl:gap-8">
        {featuredProjects.map((project, index) => (
          <li
            key={index}
            className="relative flex h-[clamp(15rem,64vw,25rem)] w-full flex-col justify-end px-6 pb-6 md:h-[clamp(15rem,31.25vw,25rem)] md:px-10 md:pb-10 xl:h-[35rem]"
          >
            <h3 className="z-10 text-2xl/10 text-white md:text-[clamp(2rem,4.167vw,4.167vw)] md:leading-[clamp(2.5rem,5.208vw,5.208vw)] xl:text-[clamp(2rem,2.222vw,3rem)] xl:leading-[clamp(2.5rem,2.778vw,2.8125rem)]">
              {project.heading}
            </h3>
            <p className="xl: z-10 text-lg/6 font-medium text-white md:text-[clamp(1.125rem,2.344vw,2.344vw)] md:leading-[clamp(1.5rem,3.125vw,3.125vw)] xl:text-[clamp(1.125rem,1.25vw,1.5625rem)] xl:leading-[clamp(1.5rem,1.667vw,1.875rem)]">
              View All Projects
            </p>

            <ResponsiveNextImage
              className="z-0"
              mobileImgSrc={project.mobileImgSrc}
              tabletImgSrc={project.tabletImgSrc}
              desktopImgSrc={project.desktopImgSrc}
              alt={`image of ${project.heading}`}
            />
            <span className="absolute left-0 top-0 h-full w-full bg-[rgba(0,_0,_0,_0.35)]"></span>

            <span className="hidden md:absolute md:right-[2vw] md:top-8 md:block md:text-[clamp(15.625rem,36vw,25rem)] md:font-bold md:leading-[0.8] md:text-white md:opacity-50 xl:right-[-0.9375rem] xl:top-[2.8125rem] xl:text-[clamp(15.625rem,17.361vw,17.5rem)]">
              {index + 1}
            </span>
          </li>
        ))}
      </ul>
      <CtaLink
        text="See all"
        link="/portfolio"
        width="w-[full] md:w-[fit-content] md:ml-auto"
        className="md:[grid-area:link]"
      />
    </div>
  );
}
