import React from "react";
import Image from "../image/Image";
import Link from "next/link";

interface SubPost {
  src: string;
}

const SubPost = ({ src }: SubPost) => {
  return (
    <div className="lg:h-1/3 flex justify-between gap-4">
      <Image
        src={src}
        width={400}
        height={400}
        className="rounded-3xl object-cover w-1/3 aspect-video"
      />

      <div className="w-2/3">
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <h1 className="font-semibold">02</h1>
          <Link className="text-blue-800 " href="">
            Web Design
          </Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        <Link
          href=""
          className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium "
        >
          Lorem ipsum something is there nah yes absiorddf
        </Link>
      </div>
    </div>
  );
};

export default SubPost;
