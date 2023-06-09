import React from "react";

const Button = (props: any) => {
  const defaultClassNames = props.variant
    ? props.variant === "outLined"
      ? "text-cyan-500 border border-2 border-cyan-500"
      : "text-white bg-cyan-500"
    : "text-white bg-cyan-500";
  return (
    <button
      {...props}
      className={`rounded py-1 px-4 shadow  ${defaultClassNames}  ${
        props.className
      } ${
        props.disabled && "bg-gradient-to-r from-gray-500/80  to-gray-500/80"
      } `}
    >
      {props.children}
    </button>
  );
};

export default Button;
