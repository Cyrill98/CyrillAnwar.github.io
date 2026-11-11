// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import ResumeButton from "./resume-button";
import CodeTypewriter from "../../helper/code-typewriter";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-16">

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#16f2b3]/30 bg-[#16f2b3]/10 px-3 py-1 font-mono text-xs text-[#16f2b3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3] animate-pulse" />
            Available for opportunities
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-[#16f2b3] to-sky-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base text-gray-400 lg:text-lg">
            {personalData.designation} based in {personalData.address}, building fast, reliable web and mobile products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:gap-3 hover:border-[#16f2b3] hover:text-[#16f2b3] md:px-8 md:py-4 md:text-sm"
            >
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </Link>
            <ResumeButton resumeUrl={personalData.resume} />
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              { href: personalData.github, Icon: BsGithub, label: "GitHub" },
              { href: personalData.linkedIn, Icon: BsLinkedin, label: "LinkedIn" },
              { href: personalData.facebook, Icon: FaFacebook, label: "Facebook" },
              { href: personalData.tiktok, Icon: FaTiktok, label: "TikTok" },
              { href: personalData.instagram, Icon: FaInstagram, label: "Instagram" },
              { href: personalData.twitter, Icon: FaTwitterSquare, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="rounded-full border border-white/10 p-2.5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#16f2b3] hover:text-[#16f2b3]"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0c1322] border-white/10 relative rounded-lg border bg-gradient-to-r to-[#0a1020]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-indigo-500"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-white/10 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <CodeTypewriter lineDelay={100} startDelay={600}>
              <div className="blink">
                <span className="mr-2 text-[#16f2b3]">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-[#16f2b3]">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Cyrill Anwar</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">gender:</span>
                <span className="text-yellow-400">Male</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">religion:</span>
                <span className="text-yellow-400">Muslim</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">bornDate:</span>
                <span className="text-orange-400">09/09/1998</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">isSingleNoAwek:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React Native</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
                            <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
              </CodeTypewriter>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;