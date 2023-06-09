"use client";
import React from "react";
import { Formik, Form, Field } from "formik";

type Props = {};

const SingForm = (props: Props) => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={() => {}}
      >
        {(formik) => (
          <Form className="flex flex-col items-center gap-7">
            <Field as={CustomInput} name="username" />
            <Field as={CustomInput} name="password" />
            <Button className="">submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Button = (props: any) => {
  return (
    <button
      className={`px-3 py-1 cursor-pointer text-white rounded bg-cyan-500 ${
        props.className && props.className
      }`}
    >
      {props.children}
    </button>
  );
};

const CustomInput = ({ field, ...props }: any) => {
  return <input className="p-2 bg-gray-300 rounded" {...field} {...props} />;
};

export default SingForm;
