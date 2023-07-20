import React from "react";
//Third party
import classNames from "classnames";
//App
import MidTitle from "../components/lib/MidTitle";
function SecurityPhrase() {
  const [hideSeed, setHideSeed] = React.useState(false);
  //TODO: add generator function , and generate mechanism should words live in stat?
  const seed =
    "almost parrot occur relax girl off vacuum fever goddess day mention flush";
  const seedArr: string[] = seed.split(" ");
  return (
    <div>
      <MidTitle className="my-5 text-center">
        Write down your Secret <br /> Recovery Phrase
      </MidTitle>
      <p className="text-center">
        write down this 12-word Secret Recovery phrase and save it in a place
        you trust and only can access.
      </p>
      <div>
        <h4 className="mt-4 font-bold">Tips</h4>
        <p>
          &#x2022; <span>Save in a password manager.</span>
        </p>
        <p>&#x2022; Store in a safe deposit box</p>
        <p>&#x2022; Write down and store in a multiple secret places</p>
      </div>

      <div
        className={classNames(
          "flex flex-wrap justify-between gap-2 p-2 mt-2 border rounded sm:p-4 sm:gap-4 border-borderGray ",
          { "filter blur-[3px]": hideSeed }
        )}
      >
        {seedArr.map((s: string, index: number) => (
          <span key={`${s}-${index}`} className="basis-1/3 sm:basis-1/4">
            {`${index + 1}. `}
            <span className="px-1 py-[3px] border rounded-md border-borderGray">
              {s}
            </span>
          </span>
        ))}
      </div>
      <div className="flex justify-between px-4 mx-auto mt-6 text-secondary">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => setHideSeed(!hideSeed)}
        >
          <div className="relative flex items-center">
            <div
              style={{ fontSize: "16px" }}
              className={classNames(
                "  material-icons-outlined select-none	mr-1 "

                // { "text-gray-600": true }
              )}
              // onClick={handleShow}
            >
              remove_red_eye
            </div>
            {hideSeed && (
              <div className="absolute w-[2px] h-[15px] bg-secondary  rotate-[60deg] rounded top-[0px] left-[7px] " />
            )}{" "}
          </div>
          hide seed phrase
        </div>
        <div
          className="flex items-center cursor-pointer "
          onClick={() => copyContent(seed)}
        >
          <span className="!text-base material-icons-outlined mr-1">
            content_copy
          </span>
          <span>copy to clip board</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Helper Functions ---------------------------- */
//TODO: make this function util function and mange to add notification
async function copyContent(content: string) {
  try {
    await navigator.clipboard.writeText(content);
  } catch (err) {
    console.error("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}

export default SecurityPhrase;
