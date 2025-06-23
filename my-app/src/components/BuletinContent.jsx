import React from "react";

function BuletinContent({ image }) {
  return (
    <div className="">
      <img
        src={image}
        alt="Buletin Image"
        className="w-30 h-30 rounded-full object-cover border-2 border-gray-200 hover:border-orange-500 transition"
      />
      <span className="mt-2 text-sm font-semibold ml-5">BBC NEWS</span>
    </div>
  );
}

export default BuletinContent;
