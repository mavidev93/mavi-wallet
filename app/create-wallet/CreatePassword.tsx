import React from "react";
//Third party
import { Formik, Form, Field } from "formik";
import Yup from "yup";
//App
import MidTitle from "../components/lib/MidTitle";
import styled from "@emotion/styled";
import CustomTextField from "../components/lib/CustomTextField";
import Button from "../components/lib/Button";
import classNames from "classnames";
type Props = {};

const CreatePassword = (props: Props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  /* -------------------------------- Handlers -------------------------------- */
  const handleShow = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <MidTitle className="my-5 text-center ">Create Password</MidTitle>
      <p className="">
        This password only opens Mavi wallet on your device and Mavi Wallet can
        not recover this.{" "}
      </p>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={() => {}}
      >
        <div className="max-w-xs mx-auto mt-6 ">
          <Form className="flex flex-col gap-2">
            <label className="flex flex-col">
              <div className="flex items-center justify-between">
                <span>password</span>
                <div className="relative flex items-center">
                  <span
                    style={{ fontSize: "16px" }}
                    className={classNames(
                      " cursor-pointer material-icons-outlined select-none	 ",

                      { "text-gray-600": showPassword }
                    )}
                    onClick={handleShow}
                  >
                    remove_red_eye
                  </span>
                  {showPassword && (
                    <div className="absolute w-[2px] h-[15px] bg-gray-600 rotate-[60deg] rounded top-[0px] left-[7px] " />
                  )}{" "}
                </div>
              </div>
              <CustomTextField
                name="password"
                className="py-2"
                type={showPassword ? "text" : "password"}
              />
            </label>
            <label className="flex flex-col ">
              confirm password
              <CustomTextField
                className="py-2"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
              />
            </label>
            <div className="self-start">
              <Field name="agreement" type="checkbox" className="mr-2" />I
              understand this password is just for this browser in this device
              and It is not recoverable, and I must save 12 mnemonic words in
              next step.
            </div>
            <Button className="mt-5">Create Wallet</Button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

/* ---------------------------- Helper Components --------------------------- */

export default CreatePassword;
