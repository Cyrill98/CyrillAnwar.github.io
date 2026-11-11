// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

import SectionHeading from "../../helper/section-heading";

function Blog({ blogs }) {

  return (
    <div id='blogs' className="relative z-50 my-16 lg:my-28">
      <div className="w-[100px] h-[100px] bg-[#16f2b3] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <SectionHeading index="06" title="Blogs" className="my-8 lg:my-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, 6).map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#16f2b3] hover:bg-[#5cf7cc] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#070b14] no-underline transition-all duration-200 ease-out hover:text-[#070b14] hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;