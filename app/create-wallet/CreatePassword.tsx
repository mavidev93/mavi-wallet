import React from "react";
//App
import MidTitle from "../components/lib/MidTitle";
type Props = {};

const CreatePassword = (props: Props) => {
  return (
    <div>
      <MidTitle className="mt-5 mb-2 text-center">Create Password</MidTitle>
      <p>This password only opens Mavi wallet on your device and Mavi Wallet can not recover this. </p>
    </div>
  );
};

export default CreatePassword;
