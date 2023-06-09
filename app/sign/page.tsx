import React from "react";
import SingForm from "./singForm";
type Props = {};

const Sign = (props: Props) => {
  return (
    <div className="max-w-xl p-3 mx-auto mt-20 shadow ">
      <div className="flex flex-col gap-8">
        <h3 className="font-bold text-center">Lets Get Started</h3>
        <SingForm />
      </div>
    </div>
  );
};

export default Sign;
