// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import { profileImg } from "@/utils/data/profileImg";
import dynamic from "next/dynamic";

const CardDeck = dynamic(() => import("./card-deck"), { ssr: false });
const MusicPlayer = dynamic(() => import("./music-player"), { ssr: false });

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left section for text */}
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">
              {personalData.description}
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
