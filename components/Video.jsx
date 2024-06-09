import "../css/apollo11.css"
const Video = () => {
  return (
    <div className=" bg-[#080808] flex justify-center items-center flex-col px-2   bg-video pt-5">
      <h1 className="text-center text-5xl my-10">Landing</h1>

      <div className="relative">
        <div className="circle4"></div>
        <div className="circle4"></div>
        <video
          className="rounded-3xl border-x-[3px] border-[#6E06D4] shadow-lg-2 "
          controls
          width="640"
          height="264"
          poster="/video-bg.webp"
        >
          <source src="/Apollo11_LandingontheMoon.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Video
