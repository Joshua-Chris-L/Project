import React from "react";
import { MoveRight } from "lucide-react";
import NewsContent from "./NewsContent";
import firstImage from "../assets/BusiSportPic/FirstBild.png";
import secoundImage from "../assets/BusiSportPic/SecoundBild.png";
import thirdImage from "../assets/BusiSportPic/ThirdBild.png";
import fourthImage from "../assets/BusiSportPic/FourthBild.png";

function BusiSport() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 mt-8">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold"> Business </h1>
        <div className="flex">
          <div className="mt-2 mr-3">
            <MoveRight />
          </div>
          <h1 className=" text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            Sport News
          </h1>
        </div>
        <MoveRight />
      </div>
      <div className="flex grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NewsContent image={firstImage} />
        <NewsContent image={secoundImage} />
        <NewsContent image={thirdImage} />
        <NewsContent image={fourthImage} />
      </div>
    </div>
  );
}

export default BusiSport;
