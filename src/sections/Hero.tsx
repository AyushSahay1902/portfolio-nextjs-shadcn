import Image from "next/image";
import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-22 md:py-32 lg:py-42 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)] overflow-x-clip">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-yellow-500" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-blue-500" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-75}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-green-500" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-white/20" />
        </HeroOrbit>
        <HeroOrbit
          size={420}
          rotation={80}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-white/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={160}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-white/20" />
        </HeroOrbit>
        <HeroOrbit
          size={620}
          rotation={130}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-6 text-white/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind a laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-gray-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in creating modern, responsive websites and
            web-developent projects. Lets discuss your next project and take it
            to the next level.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="flex items-center gap-2 bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-white/15 px-6 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-900 hover:text-white border border-white px-6 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900">
            <span role="img" aria-label="Wave">
              👋
            </span>
            <span className="font-semibold">Lets connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
