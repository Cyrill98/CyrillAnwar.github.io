// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { profileImg } from "@/utils/data/profileImg";

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
              <Carousel
                showStatus={false}
                dynamicHeight={false}
                showThumbs={false}
                swipeable
                autoPlay
                emulateTouch
                className="max-w-xs lg:max-w-sm" // Restricting the carousel width
              >
                  {
                    profileImg.map((img, index) => {return (
                      <div className="min-h-[200px] min-w-[200px]" key={img.id}>
                      <Image
                        src={img.img}
                        width={160}
                        height={200}
                        alt="profile-2"
                        className="w-full h-full object-cover"
                      />
                </div>
                    )})
                  }
              </Carousel>
              <div className="pt-3">
                <ReactAudioPlayer
                  src="/Aspalela.mp3"
                  autoPlay={true}
                  controls
                  style={{ caretColor: "dark" }}
                  volume={0.5}
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
