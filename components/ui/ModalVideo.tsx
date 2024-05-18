"use client";
import { XIcon } from "lucide-react";
import React from "react";

interface ModalVideoProps {
  isOpen: boolean;
  videoUrl: string;
  autoPlay: boolean;
  onClose:()=>void;
}

const ModalVideo = ({
  isOpen,
  videoUrl,
  autoPlay,
  onClose,
}: ModalVideoProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-[999999] flex h-full w-full items-center justify-center bg-black/30">
          <video
            className="w-[300px] rounded-lg"
            controls
            src={videoUrl}
            autoPlay={autoPlay}
          ></video>
          <div onClick={onClose} className="ml-4 h-[70%] cursor-pointer">
            <XIcon size={40} strokeWidth={1.5} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalVideo;
