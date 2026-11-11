// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import { profileImg } from "@/utils/data/profileImg";
import dynamic from "next/dynamic";
import SectionHeading from "../../helper/section-heading";
import Typewriter from "../../helper/typewriter";

const CardDeck = dynamic(() => import("./card-deck"), { ssr: false });
const MusicPlayer = dynamic(() => import("./music-player"), { ssr: false });

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-28 relative">
      <SectionHeading index="01" title="About" className="mb-10 lg:mb-14" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left section for text */}
          <div className="order-2 lg:order-1">
            <p className="font-mono mb-4 text-accent text-sm tracking-widest uppercase">
              Who I am?
            </p>
            <p className="text-fg/80 text-base lg:text-lg leading-relaxed">
              <Typewriter
                text={personalData.description}
                speed={20}
                delay={800}
              />
            </p>
          </div>

          {/* Right section for image and music player */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="flex flex-col items-center">
              <CardDeck images={profileImg} />
              <div className="pt-4">
                <MusicPlayer
                  tracks={[
                    { name: "Crush", singer: "Cyrill", musicSrc: "/crush.mp3" },
                    { name: "Someday", singer: "The Strokes", musicSrc: "/Someday.mp3" },
                    { name: "Rumah Ke Rumah", singer: "Hindia", musicSrc: "/rumahkerumah.mp3" },
                    // { name: "Aspalela", singer: "Joe Flizzow", musicSrc: "/Aspalela.mp3" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
