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
    <div className="px-4 sm:px-6 lg:px-20 mt-22">
      <div className="flex justify-between items center">
        <h1 className="text-3xl"> Latest News </h1>
        <div className="flex">
          <h3 className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            See all
          </h3>
          <MoveRight />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
