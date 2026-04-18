"use client";
import React, { useState } from "react";
import { useTimeline } from "../../context/TimelineContext";

const icons = {
  Video: "/assets/video.png",
  Text: "/assets/text.png",
  Call: "/assets/call.png",
};

const page = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");
  const filtered = entries.filter((e) =>
    filter === "All" ? true : e.type === filter,
  );

  return (
    <div className="mt-10 md:mt-20 max-w-7xl w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-black mb-6">Timeline</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select mb-6 bg-white border text-[#64748B] border-[#E9E9E9] appearance-none"
      >
        <option value="All">All</option>
        <option value="Video">Video</option>
        <option value="Text">Text</option>
        <option value="Call">Call</option>
      </select>

      <div className="flex flex-col gap-4">
        {entries.length === 0 && (
          <p className="text-sm text-[#64748B] mb-2">
            No timeline entries yet.
          </p>
        )}

        {filtered.map((e) => (
          <div
            key={e.id}
            className="bg-white shadow p-4 flex gap-4 items-center rounded-lg border border-[#E9E9E9]"
          >
            <img src={icons[e.type] || "/assets/video.png"} alt={e.type} />
            <div>
              <p className="text-xl text-[#244D3F] font-medium">{e.title}</p>
              <p className="text-base text-[#64748B]">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
