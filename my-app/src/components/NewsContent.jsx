import React from "react";
import Science from "../assets/Science.png";
import { MoveRight } from "lucide-react";

function NewsContent({
  image,
  titleColor = "text-gray-700",
  metaColor = "text-gray-500",
  titleSize = "text-base",
  bodySize = "text-sm",
  metaSize = "text-lg",
  className = "",
}) {
  return (
    <div className={`${className}`}>
      <div className="lg:flex">
        <div className="w-full h-full">
          {image && (
            <img
              className="h-50 w-60 rounded-lg"
              src={image}
              alt="Science Image"
            />
          )}
          <div className={`flex items-center ${bodySize} mt-2 ${metaColor}`}>
            <span> Formula 1 </span>
            <span
              className={`text-center font-bold ${metaSize} leading-none ml-2 mr-2`}
            >
              ·
            </span>
            <span> 3 hours ago </span>
          </div>
          <h1 className={`font-bold ${titleSize} mt-2`}>
            {" "}
            'He Deserves a lot more verstappen backs alonso'{" "}
          </h1>
          <p className={`${bodySize} ${titleColor} mt-2`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
          <p className={`flex items-center ${bodySize} ${metaColor} mt-2 `}>
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Sport{" "}
            </span>
            <span
              className={`text-center font-bold ${metaSize} leading-none ml-2 mr-2`}
            >
              ·
            </span>
            <span> 8 min read </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsContent;
