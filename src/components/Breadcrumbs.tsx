import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <div className="flex gap-2">
      <Link href="/">Home</Link>
      <span>/</span>
      <span className="text-blue-800">Blogs and Articles</span>
    </div>
  );
};

export default Breadcrumbs;
