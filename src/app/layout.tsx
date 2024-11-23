import { ClerkProvider,SignedOut,  } from "@clerk/nextjs";
import "./globals.css";
import Login from "./login/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <Login/>
          </SignedOut>
        

            {children}
     
        </body>
      </html>
    </ClerkProvider>
  );
}
