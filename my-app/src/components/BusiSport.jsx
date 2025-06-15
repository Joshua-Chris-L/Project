import React from "react";
import { MoveRight } from "lucide-react";
import NewsContent from "./NewsContent";
import firstImage from "../assets/BusiSportPic/FirstBild.png";
import secoundImage from "../assets/BusiSportPic/SecoundBild.png";
import thirdImage from "../assets/BusiSportPic/ThirdBild.png";
import fourthImage from "../assets/BusiSportPic/FourthBild.png";

function BusiSport() {
  return (
    <div className="mr-30 ml-30 mt-8">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-bold"> Business </h1>
        <div className="flex">
          <div className="mt-2 mr-3">
            <MoveRight />
          </div>
          <h1 className=" text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            {" "}
            Sport News{" "}
          </h1>
        </div>
        <MoveRight />
      </div>
      <div className="flex space-x-20">
        <NewsContent image={firstImage} />
        <NewsContent image={secoundImage} />
        <NewsContent image={thirdImage} />
        <NewsContent image={fourthImage} />
      </div>
    </div>
  );
}

export default BusiSport;
