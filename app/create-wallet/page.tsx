"use client";
import React from "react";
import Wrapper from "../components/lib/Wrapper";
import StepProgress from "../components/lib/StepProgress";
const CreateWallet = () => {
  const [step, setStep] = React.useState(0);
  return (
    <Wrapper className="max-w-lg ">
      <StepProgress activeStep={2} />
    </Wrapper>
  );
};

export default CreateWallet;
