import Image from "next/image";
import friendData from "../../../public/data/friends.json";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchiveX } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";

const page = async ({ params }) => {
  const { id } = await params;
  const friend = friendData.find((frnd) => frnd.id === parseInt(id));
  let color = "";
  switch (friend.status) {
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
    <div className="mt-10 md:mt-20 max-w-7xl w-11/12 mx-auto">
      {friend && (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="flex flex-col gap-4 col-span-2 items-center justify-center">
            <div className="w-full bg-white shadow flex justify-center items-center gap-1.5 flex-col rounded-lg p-4 md:p-6 lg:p-8">
              <Image
                className="rounded-full"
                src={friend.picture}
                alt={friend.name}
                width={98}
                height={98}
              />
              <h1 className="text-xl font-bold text-black py-2">
                {friend.name}
              </h1>
              <p
                className={`text-xs px-2 mb-0.5 py-0.5 w-auto inline rounded-full text-white ${color}`}
              >
                {friend.status}
              </p>
              <p className="text-[#244D3F] space-x-1 mb-2 text-xs">
                {friend.tags.map((tag) => (
                  <span
                    className="bg-[#CBFADB] px-2 py-0.5 rounded-full"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <em className="text-[#64748B] text-base">{friend.bio}</em>
              <p className="text-sm text-[#64748B]">Email: {friend.email}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 md:p-6  w-full">
              <p className="text-base text-[#1F2937] flex items-center gap-1 font-bold">
                <HiOutlineBellSnooze className="text-lg" /> Snooze 2 weeks
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-4 md:p-6  w-full">
              <p className="text-base text-[#1F2937] flex items-center gap-1 font-bold">
                <LuArchiveX className="text-lg" /> Archive
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 md:p-6  w-full">
              <p className="text-base text-[#EF4444] flex items-center gap-1 font-bold">
                <RiDeleteBin6Line className="text-lg" /> Delete
              </p>
            </div>
          </div>

          <div className="col-span-4 space-y-4 xl:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow rounded-lg p-4 lg:p-6 xl:p-8">
                <h1 className="text-[#244D3F] text-center font-bold text-3xl">
                  {friend.days_since_contact}
                </h1>
                <p className="text-lg text-center text-[#64748B]">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 lg:p-6 xl:p-8">
                <h1 className="text-[#244D3F] text-center font-bold text-3xl">
                  {friend.goal}
                </h1>
                <p className="text-lg text-center text-[#64748B]">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4 lg:p-6 xl:p-8">
                <h1 className="text-[#244D3F] text-center font-bold text-3xl">
                  {friend.next_due_date}
                </h1>
                <p className="text-lg text-center text-[#64748B]">Next Due</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 lg:p-6 xl:p-8 flex md:flex-row flex-col items-start justify-between">
              <div>
                <h1 className="text-xl text-[#244D3F] font-medium mb-5">
                  Relationship Goal
                </h1>
                <p className="text-lg text-[#64748B]">
                  {" "}
                  Connect every{" "}
                  <span className="font-bold text-black">
                    {friend.goal} days
                  </span>{" "}
                </p>
              </div>
              <div>
                <button className="text-sm mt-2.5 md:mt-0 text-black font-semibold btn bg-[#F8FAFC] border border-[#E9E9E9] shadow-none">
                  Edit
                </button>
              </div>
            </div>

            {/* phone,text,video  */}
            <div className="bg-white rounded-xl shadow p-4 md:6 xl:p-8">
              <h1 className="text-xl text-[#244D3F] font-medium mb-5">
                Relationship Goal
              </h1>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 xl:gap-8 w-full">
                <div className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4">
                  <BiSolidPhoneCall className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
                  <p className="text-lg text-[#1F2937] text-center">Call</p>
                </div>
                <div className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4">
                  <MdOutlineTextsms className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
                  <p className="text-lg text-[#1F2937] text-center">Text</p>
                </div>
                <div className="bg-[#F8FAFC] w-full border border-[#E9E9E9] rounded-xl shadow flex flex-col items-center justify-center p-4">
                  <MdOutlineVideocam  className="w-6 h-6 text-[#1F2937] mb-2.5 md:w-8 md:h-8" />
                  <p className="text-lg text-[#1F2937] text-center">Call</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
