import { MoveRight } from "lucide-react";
import NewsContent from "./NewsContent";
import Science from "../assets/Science.png";
import Business from "../assets/Business.png";
import Politics from "../assets/Politics.png";
import Sport from "../assets/Sports.png";
import Climate from "../assets/Climate.png";
import Entertainment from "../assets/Entertainment.png";

function NewsList() {
  return (
    <div className="  pl-30 pr-30 mt-10">
      <div className="flex justify-between">
        <h1 className="text-3xl"> Latest News </h1>
        <div className="flex">
          <h3 className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            {" "}
            See all{" "}
          </h3>
          <MoveRight />
        </div>
      </div>

      <div className="flex mt-5 space-x-5">
        <NewsContent image={Science} />
        <NewsContent image={Business} />
        <NewsContent image={Entertainment} />
        <NewsContent image={Sport} />
        <NewsContent image={Climate} />
      </div>
    </div>
  );
}

export default NewsList;
