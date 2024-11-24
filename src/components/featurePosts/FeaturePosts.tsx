import React from "react";

import Link from "next/link";
import Image from "../image/Image";
import SubPost from "./SubPost";

const FeaturePosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 ">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          width={500}
          height={400}
          src="https://ik.imagekit.io/1ggubenni8/featured1.jpeg?updatedAt=1732365417693"
          className="rounded-3xl object-cover"
        />

        <div className="flex items-center gap-4 ">
          <h1 className="font-semibold lg:text-4xl">01</h1>
          <Link className="text-blue-800 lg:text-lg" href="">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link
          href=""
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum something is there nah yes absiorddf
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <SubPost src="https://ik.imagekit.io/1ggubenni8/featured2.jpeg?updatedAt=1732365417956" />
        <SubPost src="https://ik.imagekit.io/1ggubenni8/featured2.jpeg?updatedAt=1732365417956" />
        <SubPost src="https://ik.imagekit.io/1ggubenni8/featured2.jpeg?updatedAt=1732365417956" />
      </div>
    </div>
  );
};

export default FeaturePosts;
