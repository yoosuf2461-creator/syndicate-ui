import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
//import AIChat from "../components/AIChat";

// 1. Initialize your custom premium typography
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// 2. Global Studio Metadata
export const metadata: Metadata = {
  title: "The Syndicate.",
  description: "A privately held digital architecture firm.",
};

// 3. The Single Root Layout Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        
        {/* Your entire application injects here */}
        {children}
        
        {/* Your Global Interactive Elements */}
        <WhatsAppButton />
        
        
      </body>
    </html>
  );
}