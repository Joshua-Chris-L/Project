import React from "react";

function BuletinContent({ image }) {
  return (
    <div className="h-30">
      <img
        src={image}
        alt="Buletin Image"
        className="w-35 h-35 rounded-full object-cover"
      />
      <span className="block mt-2 text-center text-sm font-semibold">
        {" "}
        BBC NEWS{" "}
      </span>
    </div>
  );
}

export default BuletinContent;
