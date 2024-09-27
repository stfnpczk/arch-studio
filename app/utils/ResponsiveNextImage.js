import { useWindowWidth } from "../hooks/useWindowWidth";
import Image from "next/image";

export default function ResponsiveNextImage({
  mobileImgSrc,
  tabletImgSrc,
  desktopImgSrc,
  alt,
}) {
  const windowSize = useWindowWidth();

  const imageLoader = (width) =>
    width < 768 ? mobileImgSrc : width < 1280 ? tabletImgSrc : desktopImgSrc;

  return (
    <Image
      className="-z-10"
      src={imageLoader(windowSize.width)}
      alt={alt}
      fill
      sizes="100%"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
      priority
    />
  );
}
