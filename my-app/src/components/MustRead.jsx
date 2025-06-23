import { MoveRight } from "lucide-react";
import NewsContent from "./NewsContent";
import firstImage from "../assets/MustRead/Must_Read1.png";
import secoundImage from "../assets/MustRead/Must_Read2.png";
import thirdImage from "../assets/MustRead/Must_Read3.png";
import fourthImage from "../assets/MustRead/Must_Read4.png";

function MustRead() {
  return (
    <div className="gap-4 px-4 sm:px-6 lg:px-20 mt-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold"> Must Read </h1>
        <div className="flex">
          <h3 className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            See all
          </h3>
          <MoveRight />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-1/3 h-120">
          <NewsContent image={firstImage} titleSize="text-xl" />
        </div>

        {/* Secound Image styling */}
        <div className="relative rounded-lg overflow-hidden w-full md:w-1/3 h-120 ml-2 -mt-18 md:mt-0">
          <img
            src={secoundImage}
            alt="Secound Image"
            className="object-cover rounded-lg h-120"
          />
          <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center text-white text-3xl">
            <div className="flex flex-col justify-center">
              <NewsContent
                titleColor="text-white"
                metaColor="text-white"
                titleSize="text-3xl"
                bodySize="text-xl"
                metaSize="text-lg"
                className="w-full h-full flex-col justify-center items-center p-6 mt-20"
              />
            </div>
          </div>
        </div>

        {/* Third and Fourth Image Styling */}
        <div className="ml-3 space-y-2 w-full md:w-1/3 h-120">
          <div>
            <img
              src={thirdImage}
              alt="Third Must Read Image"
              className="h-40 w-full rounded-lg"
            />
            <div className="flex items-center text-sm mt-2 text-gray-500">
              <span> Formula 1 </span>
              <span className="text-center font-bold text-lg leading-none ml-2 mr-2">
                ·
              </span>
              <span> 3 hours ago </span>
            </div>
            <h1 className="font-bold">He deserves a lot more</h1>
            <p className="flex items-center text-sm text-lg">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Sport
              </span>
              <span className="text-center font-bold text-lg leading-none ml-2 mr-2">
                ·
              </span>
              <span> 8 min read </span>
            </p>
          </div>

          <div>
            <img
              src={fourthImage}
              alt="Third Must Read Image"
              className="h-40 w-full rounded-lg"
            />
            <div className="flex items-center text-sm mt-2 text-gray-500">
              <span> Formula 1 </span>
              <span className="text-center font-bold text-lg leading-none ml-2 mr-2">
                ·
              </span>
              <span> 3 hours ago </span>
            </div>
            <h1 className="font-bold">He deserves a lot more</h1>
            <p className="flex items-center text-sm text-lg">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Sport
              </span>
              <span className="text-center font-bold text-lg leading-none ml-2 mr-2">
                ·
              </span>
              <span> 8 min read </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MustRead;
