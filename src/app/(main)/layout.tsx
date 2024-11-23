import Navbar from "@/components/navbar/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
