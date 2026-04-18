"use client";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";
import { useTimeline } from "../../context/TimelineContext";
import toast from "react-hot-toast";

const RelationshipButtons = ({ friend }) => {
  const { addEntry } = useTimeline();

  const push = (type) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date().toLocaleDateString("en-US", options);
    const title = `${type} with ${friend.name}`;
    addEntry({ type, name: friend.name, date, title });
    toast.success(`${title} added to timeline`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 xl:gap-8 w-full">
      <button
        onClick={() => push("Call")}
        className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4"
      >
        <BiSolidPhoneCall className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
        <p className="text-lg text-[#1F2937] text-center">Call</p>
      </button>
      <button
        onClick={() => push("Text")}
        className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4"
      >
        <MdOutlineTextsms className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
        <p className="text-lg text-[#1F2937] text-center">Text</p>
      </button>
      <button
        onClick={() => push("Video")}
        className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4"
      >
        <MdOutlineVideocam className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
        <p className="text-lg text-[#1F2937] text-center">Video</p>
      </button>
    </div>
  );
};

export default RelationshipButtons;
