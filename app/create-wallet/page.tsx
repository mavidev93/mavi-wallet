"use client";
import React from "react";
//App
import Wrapper from "../components/lib/Wrapper";
import StepProgress from "../components/lib/StepProgress";
import CreatePassword from "./CreatePassword";
import SecurityPhrase from "./SecurityPhrase";
const CreateWallet = () => {
  const [step, setStep] = React.useState(1);
  /* ----------------------------------- jsx ---------------------------------- */
  const jsx = React.useMemo(() => {
    switch (step) {
      case 1:
        return <CreatePassword />;
      case 2:
        return <SecurityPhrase />;
    }
  }, [step]);
  return (
    <Wrapper className="max-w-lg mx-auto mt-[20vh] ">
      <StepProgress activeStep={step} setStep={setStep} />
      {jsx}
    </Wrapper>
  );
};

/* ---------------------------- Helper Functions ---------------------------- */

export default CreateWallet;
