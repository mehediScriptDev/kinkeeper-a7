import Image from "next/image";
import React, { use } from "react";

const Friends = ({ friends }) => {
   
  const friendsData = use(friends);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      {friendsData.map((friend) => {
         let color ='';
    switch(friend.status) {
        case "overdue":
            color = "bg-[#EF4444]";
            break;
        case "almost due":
            color = "bg-[#EFAD44]";
            break;
        case "on-track":
            color = "bg-[#244D3F]";
    }
        return (
          <div key={friend.id} className="card flex flex-col justify-center items-center text-black shadow p-4 md:p-6 bg-white">
            <Image
            className="rounded-full"
              src={friend.picture}
              alt={friend.name}
              width={98}
              height={98}
            />
            <h1 className="text-[#1F2937] font-bold text-xl py-3">{friend.name}</h1>
            <p className="text-xs text-[#64748B] mb-2">{friend.days_since_contact}d ago</p>
            <p className="text-[#244D3F] space-x-1 mb-2 text-xs">{friend.tags.map(tag=> <span className="bg-[#CBFADB] px-2 py-0.5 rounded-full" key={tag}>{tag}</span>)}</p>
            <p className={`text-xs px-2 py-0.5 rounded-full text-white ${color}`}>{friend.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
