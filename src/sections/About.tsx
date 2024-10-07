import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/square-js.svg";
import TailwindIcon from "@/assets/icons//css3.svg";
import VercelIcon from "@/assets/icons/github.svg";
import MongoIcon from "@/assets/icons/html5.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxIteems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Vercel",
    iconType: VercelIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
];

const hobies = [
  {
    title: "Travel",
    emoji: "✈️",
    left: "50%",
    top: "50%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "10%",
    top: "35%",
  },
  {
    title: "Coding",
    emoji: "👨‍💻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Trading",
    emoji: "💰",
    left: "70%",
    top: "45%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-16 lg:py-28">
      <div className="container -mt-5">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          description="I am a passionate developer with a love for crafting elegant and efficient solutions."
        />
        <div className="mt-8 flex flex-col gap-8">
          <div className="md:grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Story"
                description="I am a passionate developer with a love for crafting elegant and efficient solutions."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Toolbox"
                description="Technologies I use on a daily basis"
                className=""
              />
              <ToolBoxItems toolboxItems={toolboxIteems} className="" />
              <ToolBoxItems
                toolboxItems={toolboxIteems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Hobbies"
                description="Things I love to do in my free time"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r  from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/20">
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
