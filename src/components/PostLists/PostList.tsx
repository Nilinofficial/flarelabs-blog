import React from "react";
import Image from "../image/Image";
import Link from "next/link";

interface PostProp {
  src: string;
  title: string;
  author: string;
  createdAt: string;
}

const PostList = ({ src }: PostProp) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      <div className="  md:hidden xl:block xl:w-1/3">
        <Image src={src} className=" rounded-2xl object-cover w-full" width={500} height={300} />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link href="" className="text-4xl font-semibold">
          A Study on Orchestration
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" href="">
            Nilin Jacob
          </Link>
          <span>on</span>
          <Link href="" className="text-blue-800">
            12/12/2024
          </Link>
          <span></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link href="" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostList;
