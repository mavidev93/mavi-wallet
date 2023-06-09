import React from "react";
/* ------------------------------- Third Party ------------------------------ */
import classNames from "classnames";

/* ---------------------------------- Types --------------------------------- */
type Props = { activeStep: number };

const StepProgress = (props: Props) => {
  const { activeStep } = props;
  return (
    <div className="relative flex items-center justify-between">
      <div className="absolute flex w-full h-[1px] bg-gray-400 rounded top-[50%] translate-y-[-50%] -z-10"></div>

      <CircleNumber value={1} activeStep={activeStep} />

      <CircleNumber value={2} activeStep={activeStep} />

      <CircleNumber value={3} activeStep={activeStep} />
    </div>
  );
};

const CircleNumber = (props: { value: number; activeStep: number }) => {
  const { value, activeStep } = props;
  const isActive = value === activeStep;
  const isPassed = value < activeStep;
  const divClassName = classNames(
    "relative flex items-center justify-start w-8 h-8 bg-white  border-2 rounded-full z-100 ",
    { "bg-cyan-400 border-none text-white": isPassed },
    { "border-cyan-500 text-cyan-500": isActive }
  );
  //   debugger;

  return (
    <div className={divClassName}>
      <span className="absolute left-[50%] translate-x-[-50%]">{value}</span>
    </div>
  );
};

export default StepProgress;
