"use client";
import { FiPlus } from "react-icons/fi";
import Stats from "./components/Stats";
import { Suspense } from "react";
import Friends from "./components/Friends";
import friendsJson from "../../public/data/friends.json";

const fetchData = Promise.resolve(friendsJson);

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="pt-10 md:pt-20 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center">
            Welcome to KeenKeeper
          </h1>
          <p className="text-[#64748B] text-base text-center py-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="text-white btn btn-md bg-[#244D3F] flex items-center justify-center gap-1 font-semibold">
            <FiPlus /> Add a Friend
          </button>
        </div>
        <div className="mt-10 md:pt-20">
          <div>
            <Suspense fallback={<p>Loading...</p>}>
              <Stats />
            </Suspense>
          </div>
        </div>

        <div className="divider mt-5 lg:mt-10"></div>

        {/* main game starts here */}
        <div>
          <p className="text-2xl font-bold text-black mb-4">Your Friends</p>
          <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
              <Friends friends={fetchData} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
