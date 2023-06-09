import React from "react";
import GetStartedLinks from "./GetStartedLinks";
import Wrapper from "../lib/Wrapper";
type Props = {};

const GetStarted = (props: Props) => {
  //TODO: add  a logo or image to rise component height
  return (
    <Wrapper className="max-w-lg mx-auto mt-10 ">
      <div className="text-center">
        <h3 className="mt-4 mb-3 text-lg ">Let's get started</h3>
        <p className="text-sm text-gray-700">
          Fully open source and secure blockchain PWA wallet. all the data of
          user will just save locally on devices.
        </p>
      </div>
      <GetStartedLinks />
    </Wrapper>
  );
};

export default GetStarted;
