import "../css/apolo11.css";

const Apollo11 = () => {
  return (
    <div className="relative bg-[#080808] flex justify-center items-center flex-col gap-20 pt-10">
      <div className="h-4 w-full gradientBlack"></div>
      <h1 className="text-5xl text-center">
        <p className="flex justify-center items-center gap-5">
          Mission Apolo 11
          <img
            className="w-20"
            src="/apollo11Logo.png"
            alt="Logo of Apollo 11 mission"
          />
        </p>
        <div className="absolute top-0 rotate-45 left-80 ">
          <img src="/arrow.gif" alt="arrow" />
          <p className="text-sm" id="about">
            Astronauts
          </p>
        </div>
      </h1>
      <div className="flex gap-60 pb-5">
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="card card1">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img
                className="w-[105px]"
                src="/armstrong-signature.png"
                alt=" armstrong-signature"
              />
            </div>
          </div>
          <h1 className="text-3xl shine">Neil Armstrong</h1>
        </div>

        <div className="flex flex-col gap-20 justify-center items-center ">
          <div className="card card2">
            <div className="circle2"></div>
            <div className="circle2"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img src="/collins-signature.png" alt="collins-signature" />
            </div>
          </div>
          <h1 className="text-3xl shine">Michael Collins</h1>
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="card card3">
            <div className="circle3"></div>
            <div className="circle3"></div>
            <div className="card-inner"></div>
            <div className="shine2">
              <div className="shine-effect"></div>
              <img src="/aldrin-signature.png" alt="aldrin-signature" />
            </div>
          </div>
          <h1 className="text-3xl shine">Buzz Aldrin</h1>
        </div>
      </div>
    </div>
  );
};

export default Apollo11;
