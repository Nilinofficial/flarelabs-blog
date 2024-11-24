"use client";

import { IKImage } from "imagekitio-next";
interface ImgProps {
  className?: string;
  src: string;
  width: number;
  height: number;
}
const urlEndPoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const Image = ({ className, src, width, height }: ImgProps) => {
  return (
    <>
      <IKImage
        urlEndpoint={urlEndPoint}
        src={src}
        alt="logo"
        className={className}
        lqip={{active:true,quality:20}}
        width={width}
        height={height}
      />
    </>
  );
};

export default Image;
