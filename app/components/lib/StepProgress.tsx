import React from "react";
/* ------------------------------- Third Party ------------------------------ */
import classNames from "classnames";

/* ---------------------------------- Types --------------------------------- */
type Props = { activeStep: number; setStep: (n: number) => void };

const StepProgress = (props: Props) => {
  const { activeStep, setStep } = props;

  const cyanProgressBarCls = classNames(
    "absolute flex  h-[1px] bg-cyan-500 rounded top-[50%] translate-y-[-50%] -z-10 transition-[width] duration-500 ease-in-out ",
    barWidth(activeStep)
  );

  return (
    <div className="relative flex items-center justify-between">
      <div className="absolute flex w-full h-[1px] bg-gray-400 rounded top-[50%] translate-y-[-50%] -z-20" />
      <div className={cyanProgressBarCls} />

      <CircleNumber value={1} activeStep={activeStep} setStep={setStep} />

      <CircleNumber value={2} activeStep={activeStep} setStep={setStep} />

      <CircleNumber value={3} activeStep={activeStep} setStep={setStep} />
    </div>
  );
};

const CircleNumber = (props: {
  value: number;
  activeStep: number;
  setStep: (n: number) => void;
}) => {
  const { value, activeStep, setStep } = props;
  const isActive = value === activeStep;
  const isPassed = value < activeStep;
  const divClassName = classNames(
    "relative flex items-center justify-start w-8 h-8   border-2 rounded-full z-100 cursor-pointer ",
    { "bg-white": !isPassed },
    { "bg-cyan-500 border-none text-white": isPassed },
    { "border-cyan-500 text-cyan-500 ": isActive }
  );

  return (
    <div
      className={divClassName}
      onClick={() => {
        console.log("clicked");
        setStep(value);
      }}
    >
      <span className="absolute left-[50%] translate-x-[-50%]">{value}</span>
    </div>
  );
};

function barWidth(activeStep: number) {
  switch (activeStep) {
    case 1:
      return "w-0";
    case 2:
      return "w-[50%]";
    case 3:
      return "w-full";
  }
}

export default StepProgress;
