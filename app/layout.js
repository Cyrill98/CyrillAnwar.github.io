import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import CopyProtection from "./components/helper/copy-protection";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyrill Anwar",
  description:
    "Hi, My name is Cyrill 👋 I am a Software Engineer :) ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-clip`}>
        <CopyProtection>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-fg">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        </CopyProtection>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
