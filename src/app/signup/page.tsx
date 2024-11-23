"use client";
import { SignUp } from "@clerk/clerk-react";

const page = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default page;
