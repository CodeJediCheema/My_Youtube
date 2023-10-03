import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" bg-gray-200 px-4 py-2 mx-2 my-2 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
