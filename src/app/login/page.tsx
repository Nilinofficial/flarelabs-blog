"use client";
import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Login = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
