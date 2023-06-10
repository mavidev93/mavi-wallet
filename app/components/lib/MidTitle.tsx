import React from "react";

const MidTitle = (props: any) => {
  return (
    <h3 {...props} className={`text-2xl font-medium	 ${props.className}`}>
      {props.children}
    </h3>
  );
};

export default MidTitle;
