import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/square-js.svg";
import TailwindIcon from "@/assets/icons//css3.svg";
import VercelIcon from "@/assets/icons/github.svg";
import MongoIcon from "@/assets/icons/html5.svg";
import { TechIcon } from "@/components/TexhIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

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
  },
  {
    title: "Music",
    emoji: "🎸",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Coding",
    emoji: "👨‍💻",
  },
  {
    title: "Trading",
    emoji: "💰",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          description="I am a passionate developer with a love for crafting elegant and efficient solutions."
        />
        <div>
          <Card className={""}>
            <div>
              <StarIcon />
              <h3>My Reads</h3>
              <p>
                I am a voracious reader. I love reading books on a variety of
                topics, from technology to philosophy.
              </p>
            </div>
            <Image src={BookImage} alt="Book Cover" />
          </Card>
          <Card className={""}>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to build performant and
                digital experiences.
              </p>
            </div>
            <div>
              {toolboxIteems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className={""}>
            <div>
              <StarIcon />
              <h3>Beyond The Code</h3>
              <p>Explore my interests and hobbies outside of the world of</p>
            </div>
            <div>
              {hobies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className={""}>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoji} alt="Smile Memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
