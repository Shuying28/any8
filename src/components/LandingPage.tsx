import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/desktop-blur-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="relative w-full max-w-[430px] min-h-screen overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <img
          src="/images/background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />

        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="mt-12 px-6 w-full flex justify-center">
            <img
              src="/images/any8-logo.png"
              alt="Any8"
              className="w-28 object-contain"
            />
          </div>

          <div className="mt-1 px-4 w-full flex justify-center z-10">
            <img
              src="/images/promotions.png"
              alt="Promotion"
              className="w-96 object-contain"
            />
          </div>

          <div className="w-full mt-[-2.5rem]">
            <img
              src="/images/character.png"
              alt="Promotion visual"
              className="w-full object-contain"
            />
          </div>

          <div className="w-full pl-8 pr-4 flex flex-col pb-10 mt-[-24px]">
            <img
              src="/images/daily-slots.png"
              alt="Daily Slots 50%"
              className="w-full object-contain animate-scale-pulse cursor-pointer"
              onClick={() => {}}
            />
            <img
              src="/images/sport-monthly.png"
              alt="Sport Monthly 200%"
              className="w-full object-contain mt-[-1rem] animate-scale-pulse cursor-pointer"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
