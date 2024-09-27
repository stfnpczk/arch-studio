"use client";
import Slider from "./components/home/Slider";
import WelcomeText from "./components/home/WelcomeText";
import TeamHero from "./components/home/TeamHero";
import FeaturedProjects from "./components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Slider />
      <WelcomeText />
      <TeamHero />
      <FeaturedProjects />
    </>
  );
}
