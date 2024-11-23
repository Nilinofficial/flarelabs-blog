import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/login">
      <div className="rounded-3xl flex items-center  bg-blue-800 text-white px-4 py-1.5 cursor-pointer">
        Login 👋
      </div>
    </Link>
  );
};

export default LoginButton;
