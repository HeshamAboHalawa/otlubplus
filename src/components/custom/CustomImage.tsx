import React from "react";
import { Image, ImageProps } from "@heroui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export interface CustomImageProps extends Omit<ImageProps, "width" | "height"> {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "",
  width,
  height,
  fill,
  sizes,
  priority,
  quality,
  unoptimized,
  style,
  ...props
}) => {
  // If an explicit fill is used OR explicit width/height are provided
  if (fill || (width && height)) {
    return (
      <Image
        as={NextImage}
        src={src}
        alt={alt}
        width={width as number}
        height={height as number}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        unoptimized={unoptimized}
        style={style}
        {...props}
      />
    );
  }

  // Fallback behavior: emulate the native <img> fluid scaling behavior
  // by specifying width/height as 0 and letting CSS take over,
  // while still utilizing Next.js's image optimization pipeline!
  return (
    <Image
      as={NextImage}
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes={sizes || "100vw"}
      priority={priority}
      quality={quality}
      unoptimized={unoptimized}
      style={{ width: "100%", height: "100%", ...style }}
      {...props}
    />
  );
};

export default CustomImage;
