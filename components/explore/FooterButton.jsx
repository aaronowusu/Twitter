import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} hover:opacity-80 flex-1 py-1 mx-1 px-4 font-medium rounded-full 
   shadow-md text-center`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
