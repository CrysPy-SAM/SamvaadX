// import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";

const convex = new ConvexReactClient(
 process.env.NEXT_PUBLIC_CONVEX_URL!
);

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <ClerkProvider>
   <html lang="en">
    <body>
     <ConvexProvider client={convex}>
      {children}
     </ConvexProvider>
    </body>
   </html>
  </ClerkProvider>
 );
}