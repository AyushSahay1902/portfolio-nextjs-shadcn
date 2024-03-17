import Image from "next/image";
import NavbarComponent from "@/components/NavbarComponent";
import HeroPage from "@/components/HeroPage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
// import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    // <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <NavbarComponent />
        <HeroPage />
        <AboutMe  />
        <Projects />
        <ContactMe />
        <footer className="w-full h-18 flex items-center justify-center bg-gray-800 text-white">
          <p>Copyright@AyushSahay.com | © 2021</p>
        </footer>
      </main>
    // </NextUIProvider>
  );
}
