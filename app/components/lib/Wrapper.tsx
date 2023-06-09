import React from "react";

type Props = {};

const Wrapper = (props: any) => {
  return (
    <section {...props} className={`py-5 px-8 shadow ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Wrapper;
