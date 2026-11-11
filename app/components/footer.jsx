// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-fg/10 bg-canvas/80 text-fg/60">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2026 · <Link target="_blank" href="https://www.linkedin.com/in/cyrill-anwar" className="text-accent">Cyrill Anwar</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/cyrill98"
              className="flex items-center gap-2 uppercase hover:text-accent"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/cyrill98"
              className="flex items-center gap-2 uppercase hover:text-accent"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;