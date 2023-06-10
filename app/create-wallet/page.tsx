"use client";
import React from "react";
import Wrapper from "../components/lib/Wrapper";
import StepProgress from "../components/lib/StepProgress";
import CreatePassword from "./CreatePassword";
const CreateWallet = () => {
  const [step, setStep] = React.useState(1);
  return (
    <Wrapper className="max-w-lg mx-auto mt-14 ">
      <StepProgress activeStep={step} setStep={setStep} />
      <CreatePassword />
    </Wrapper>
  );
};

export default CreateWallet;
