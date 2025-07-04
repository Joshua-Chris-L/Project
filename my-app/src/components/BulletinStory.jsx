import BuletinContent from "./BuletinContent";
import BuletinPic1 from "../assets/BuletinPictures/BuletinPic1.jpg";
import BuletinPic2 from "../assets/BuletinPictures/BuletinPic2.jpg";
import BuletinPic3 from "../assets/BuletinPictures/BuletinPic3.jpg";
import BuletinPic4 from "../assets/BuletinPictures/BuletinPic4.jpg";
import BuletinPic5 from "../assets/BuletinPictures/BuletinPic5.jpg";
import BuletinPic6 from "../assets/BuletinPictures/BuletinPic6.jpg";
import BuletinPic7 from "../assets/BuletinPictures/BuletinPic7.jpg";
import BuletinPic8 from "../assets/BuletinPictures/BuletinPic8.jpg";
import { MoveRight } from "lucide-react";

function BulletinStory() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold"> Buletin Story </h1>
        <div className="flex items-center">
          <h3 className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            See all
          </h3>
          <MoveRight />
        </div>
      </div>
      <div className="flex grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-3">
        <BuletinContent image={BuletinPic1} />
        <BuletinContent image={BuletinPic2} />
        <BuletinContent image={BuletinPic3} />
        <BuletinContent image={BuletinPic4} />
        <BuletinContent image={BuletinPic5} />
        <BuletinContent image={BuletinPic6} />
        <BuletinContent image={BuletinPic7} />
        <BuletinContent image={BuletinPic8} />
      </div>
    </div>
  );
}

export default BulletinStory;
