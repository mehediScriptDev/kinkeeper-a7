"use client";
import React from "react";
import { useTimeline } from "../../context/TimelineContext";

const Stats = () => {
  const { entries } = useTimeline();

  const counts = {
    Video: entries.filter((e) => e.type === "Video").length,
    Text: entries.filter((e) => e.type === "Text").length,
    Call: entries.filter((e) => e.type === "Call").length,
  };

  const total = entries.length;

  const cards = [
    { id: "video", label: "Videos", value: counts.Video },
    { id: "text", label: "Texts", value: counts.Text },
    { id: "call", label: "Calls", value: counts.Call },
    { id: "total", label: "Total Interactions", value: total },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 lg:gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card rounded-lg p-4 lg:p-6 xl:p-8 shadow bg-white"
        >
          <h3 className="text-[#244D3F] text-center font-semibold text-3xl">
            {card.value}
          </h3>
          <p className="text-[#64748B] text-lg text-center">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
