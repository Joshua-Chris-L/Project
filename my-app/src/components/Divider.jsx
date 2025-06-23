import { SquarePen } from "lucide-react";
import { LampFloor } from "lucide-react";
import { BookText } from "lucide-react";
import { Clapperboard } from "lucide-react";

function Divider() {
  return (
    <div className="lg:h-50 bg-gray-300 flex items-center justify-center px-0 sm:px-6 lg:px-20 sm:rounded-md">
      <div className="text-center md:px-3 lg:px-10 max-w-6xl">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold">
          WELCOME TO NEWS BULLETIN
        </h3>
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mt-2">
          Craft narratives <SquarePen className="inline" /> that ignite
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            inspiration
          </span>
          <LampFloor className="inline" />,
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            knowledge
          </span>
          <BookText className="inline" />, and
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            entertainment{" "}
          </span>
          <Clapperboard className="inline mx-2" />
        </h1>
      </div>
    </div>
  );
}
export default Divider;
