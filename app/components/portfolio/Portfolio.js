import { allProjects } from "../../data/data";

import React from "react";
import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";

export default function Portfolio() {
  return (
    <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap md:px-0 md:pt-0">
      {allProjects.map((project, index) => (
        <li
          key={index}
          className="relative flex h-[clamp(15rem,64vw,18.75rem)] w-full cursor-pointer flex-col justify-end px-6 pb-6 transition-all hover:scale-[1.03] md:h-[clamp(15rem,31.25vw,31.25vw)] lg:w-[calc(33.33%-1rem)] xl:h-[clamp(35rem,38.889vw,37.5rem)] fine-pointer:hover:transform"
        >
          <h3 className="z-10 text-3xl/10 font-bold text-white md:text-[clamp(1.5rem,2.5vw,3vw)] xl:text-4xl/10">
            {project.heading}
          </h3>
          <p className="z-10 text-lg/6 font-medium text-[white]">
            {project.date}
          </p>

          <ResponsiveNextImage
            mobileImgSrc={project.mobileImgSrc}
            tabletImgSrc={project.tabletImgSrc}
            desktopImgSrc={project.desktopImgSrc}
            alt={`Image of ${project.heading}`}
          />
          <span className="absolute left-0 top-0 h-full w-full bg-[rgba(0,_0,_0,_0.25)]"></span>
        </li>
      ))}
    </ul>
  );
}
