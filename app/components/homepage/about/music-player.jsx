// @flow strict
"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { BsFillPlayFill, BsPauseFill, BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { IoMusicalNotes } from "react-icons/io5";

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function MusicPlayer({ tracks = [] }) {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const track = tracks[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack((prev) => prev + 1);
      } else {
        setCurrentTrack(0);
      }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [currentTrack, tracks.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSeek = useCallback((e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    audio.currentTime = percent * duration;
  }, [duration]);

  const handlePrev = useCallback(() => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  }, [tracks.length]);

  const handleNext = useCallback(() => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  }, [tracks.length]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-[340px] sm:w-[360px] rounded-2xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] p-4 shadow-xl">
      <audio ref={audioRef} src={track?.musicSrc} preload="metadata" />

      {/* Track info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-violet-600/20 ring-1 ring-pink-500/20">
          <IoMusicalNotes className="text-pink-500" size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {track?.name || "No track"}
          </p>
          <p className="truncate text-xs text-gray-400">
            {track?.singer || "Unknown artist"}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div
          className="group relative h-1.5 w-full cursor-pointer rounded-full bg-[#1b2c68] transition-all hover:h-2"
          onClick={handleSeek}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Volume */}
        <button
          onClick={toggleMute}
          className="text-gray-400 transition-colors hover:text-white"
        >
          {isMuted || volume === 0 ? (
            <HiVolumeOff size={18} />
          ) : (
            <HiVolumeUp size={18} />
          )}
        </button>

        {/* Playback controls */}
        <div className="flex items-center gap-4">
          {tracks.length > 1 && (
            <button
              onClick={handlePrev}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BsSkipBackwardFill size={16} />
            </button>
          )}
          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-500/20 transition-all hover:scale-105 hover:shadow-pink-500/30 active:scale-95"
          >
            {isPlaying ? (
              <BsPauseFill size={22} />
            ) : (
              <BsFillPlayFill size={22} className="ml-0.5" />
            )}
          </button>
          {tracks.length > 1 && (
            <button
              onClick={handleNext}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <BsSkipForwardFill size={16} />
            </button>
          )}
        </div>

        {/* Volume slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setIsMuted(false);
          }}
          className="w-16 h-1 appearance-none rounded-full bg-[#1b2c68] accent-pink-500 cursor-pointer [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
