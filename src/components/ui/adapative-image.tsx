import { cn } from "@/lib/utils";
import Image from "next/image";
import type ImageProps from "next/image";

type Props = {
  lightSrc: string;
  darkSrc: string;
  className: string;
} & typeof ImageProps;

export function AdaptiveImage({
  lightSrc,
  darkSrc,
  className,
  ...rest
}: Props) {
  return (
    <>
      <Image
        src={darkSrc}
        alt="Adaptive Image"
        className={cn("hidden dark:block", className)}
        {...rest}
      />

      <Image
        src={lightSrc}
        className={cn("block dark:hidden", className)}
        alt="Adaptive Image"
        {...rest}
      />
    </>
  );
}
