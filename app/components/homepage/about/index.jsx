// @flow strict
'use client'
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

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
              <Image
                src={personalData.profile}
                width={280}
                height={280}
                alt="Cyrill Anwar"
                className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              />
              <div className="pt-3">
              <ReactAudioPlayer src="/Aspalela.mp3" autoPlay={true} controls style={{ caretColor: 'dark'}} volume={0.5}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
