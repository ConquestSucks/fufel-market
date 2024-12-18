import type { Metadata } from "next";
import "./globals.scss";
import NavBar from '@/app/components/ui/navbar/NavBar'
import Footer from "./components/ui/footer/Footer";
import SignInModal from "./components/ui/auth/SignInModal";

export const metadata: Metadata = {
  title: "Fufel Market",
  description: "Buy n Sell everything",
  icons: '/fufel-market-favicon-black.svg'
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col gap-4 h-screen`}
      >
        <NavBar/>
        <div id="modal-root">
          <SignInModal/>
        </div>
        {children}
        <SignInModal/>
        <Footer/>
      </body>
    </html>
  );
}
