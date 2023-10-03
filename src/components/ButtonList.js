import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Mixes",
    "Live",
    "Gadgets",
    "Tourism",
    "Podcast",
    "Recent",
    "Watched",
    "Cricket",
    "Soccer",
    "Cooking",
  ];
  return (
    <div className="w-full overflow-x-scroll no-scrollbar">
      <div className="flex">
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
