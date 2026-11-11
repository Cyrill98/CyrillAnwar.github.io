// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";

import SectionHeading from "../../helper/section-heading";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 my-16 lg:my-28"
    >
      <SectionHeading index="02" title="Experience" className="my-8 lg:my-12" />

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  navigate={experience?.url} // Fixed: wrap the function
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-accent">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-fg  transition-all duration-300 hover:scale-125">
                        <Image
                          src={experience.logo}
                          alt="Description"
                          width={75}
                          height={75}
                        />
                      </div>
                      <div>
                        <p className="text-accent text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                        <p className="text-xs">{experience.location}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
