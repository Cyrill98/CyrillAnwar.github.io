// @flow strict
"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

function ResumeButton({ resumeUrl }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setShowDialog(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowDialog(false);
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
      >
        <span>Get Resume</span>
        <MdDownload size={16} />
      </button>

      {/* Backdrop + Dialog */}
      {showDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Dialog */}
          <div
            className="relative w-full max-w-md rounded-2xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-pink-500" />

            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/20 to-violet-600/20 ring-1 ring-pink-500/30">
                <MdDownload size={28} className="text-pink-500" />
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-center text-xl font-bold text-white">
              One Quick Thing! ✋
            </h3>

            {/* Description */}
            <p className="mb-6 text-center text-sm leading-relaxed text-gray-300">
              Cyrill prefers a personal connection before sharing his resume.
              Feel free to reach out first — he&apos;d love to hear about the
              opportunity! If you&apos;ve already been in touch, go right ahead.
            </p>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleClose}
                className="rounded-full border border-[#353951] px-6 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-gray-500 hover:text-white"
              >
                Cancel
              </button>
              <Link
                href={resumeUrl}
                target="_blank"
                onClick={handleClose}
                className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-2.5 text-center text-sm font-semibold text-white no-underline transition-all duration-200 hover:from-pink-600 hover:to-violet-700 hover:text-white hover:no-underline"
              >
                Proceed Anyway
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumeButton;
