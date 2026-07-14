"use client";

import { useRef, useState } from "react";
import { Star, UserRoundCheck, Volume2, VolumeX } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="w-full aspect-[4/3] rounded-[20px] [box-shadow:0_8px_40px_rgba(15,76,129,0.08)] relative overflow-hidden bg-hblue-light">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-5 left-5 flex items-center justify-center h-10 w-10 rounded-full bg-white/90 backdrop-blur text-hblue shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-white transition-colors"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <div className="absolute bottom-5 right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur px-4.5 py-2.5 rounded-full text-[0.85rem] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <UserRoundCheck size={14} className="text-hgreen" />
        <Star size={14} className="text-amber-500" /> 5000+ patients
      </div>
    </div>
  );
}
