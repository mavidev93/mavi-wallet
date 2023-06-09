"use client";
import React from "react";
import Link from "next/link";
import Button from "../lib/Button";
const GetStartedLinks = () => {
  return (
    <section className="flex flex-col items-center gap-4 mt-4">
      <div>
        <p>
          <input type="checkbox" />
          <span className="ml-2 text-sm">
            I agree with{" "}
            <Link className="text-cyan-500" href="#">
              Terms Of Use
            </Link>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <Link href="/create-wallet">
          {" "}
          <Button className="w-full">Create a new wallet</Button>
        </Link>
        <Link href="#">
          <Button>Import an existing wallet</Button>
        </Link>
      </div>
    </section>
  );
};

export default GetStartedLinks;
