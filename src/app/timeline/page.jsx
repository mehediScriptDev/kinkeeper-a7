// import video from '/assets/video.png'
// import call from '/assets/call.png'
// import textt from '/assets/text.png'

const page = () => {
  return (
    <div className="mt-10 md:mt-20 max-w-7xl w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-black mb-6">Timeline</h1>
      <select defaultValue="Pick a color" className="select mb-6 bg-white border text-[#64748B] border-[#E9E9E9] appearance-none">
        <option disabled={true}>Pick a color</option>
        <option>Video</option>
        <option>Text</option>
        <option>Call</option>
      </select>
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow p-4 flex gap-4 items-center rounded-lg border border-[#E9E9E9]">
          <img src="/assets/video.png" alt="video" />
          <div>
            <p className="text-xl text-[#244D3F] font-medium">
              Video{" "}
              <span className="text-lg font-normal text-[#64748B]">
                with Tom Baker
              </span>
            </p>
            <p className="text-base text-[#64748B]">March 29, 2026</p>
          </div>
        </div>
        <div className="bg-white shadow p-4 flex gap-4 items-center rounded-lg border border-[#E9E9E9]">
          <img src="/assets/text.png" alt="text" />
          <div>
            <p className="text-xl text-[#244D3F] font-medium">
              Text{" "}
              <span className="text-lg font-normal text-[#64748B]">
                with Tom Baker
              </span>
            </p>
            <p className="text-base text-[#64748B]">March 29, 2026</p>
          </div>
        </div>
        <div className="bg-white shadow p-4 flex gap-4 items-center rounded-lg border border-[#E9E9E9]">
          <img src="/assets/call.png" alt="call" />
          <div>
            <p className="text-xl text-[#244D3F] font-medium">
              Call{" "}
              <span className="text-lg font-normal text-[#64748B]">
                with Tom Baker
              </span>
            </p>
            <p className="text-base text-[#64748B]">March 29, 2026</p>
          </div>
        </div>
        <div className="bg-white shadow p-4 flex gap-4 items-center rounded-lg border border-[#E9E9E9]">
          <img src="/assets/video.png" alt="video" />
          <div>
            <p className="text-xl text-[#244D3F] font-medium">
              Video{" "}
              <span className="text-lg font-normal text-[#64748B]">
                with Tom Baker
              </span>
            </p>
            <p className="text-base text-[#64748B]">March 29, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
