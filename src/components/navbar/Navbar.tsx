"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import LoginButton from "../buttons/LoginButton";
import Image from "../image/Image";
import Link from "next/link";
import menuLinks from "../../../constants/menuLinks.json";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            src="https://ik.imagekit.io/1ggubenni8/logo.png?updatedAt=1732365417600"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold">FlareBlog</span>
        </div>
      </Link>

      <div className="md:hidden flex">
        <div className="cursor-pointer" onClick={handleHamburgerMenu}>
          {open ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </div>

        <div
          style={{ height: `calc(100vh - 64px)` }}
          className={`w-full  h-screen top-16 bg-[#e6e6ff] absolute flex flex-col items-center justify-center ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out space-y-4 `}
        >
          {menuLinks.links.map((link) => (
            <h3 className="text-xl cursor-pointer " key={link.id}>
              {link.name}
            </h3>
          ))}
             <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "36px",
                  height: "36px",
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <LoginButton />
        </SignedOut>
        </div>
      </div>

      <div className="hidden md:flex space-x-10 items-center">
        {menuLinks.links.map((link) => (
          <h3 className="text-lg cursor-pointer" key={link.id}>
            {link.name}
          </h3>
        ))}

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "36px",
                  height: "36px",
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <LoginButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
