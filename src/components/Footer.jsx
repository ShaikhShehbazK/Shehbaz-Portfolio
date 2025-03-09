import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row py-3 justify-center items-center bg-black text-white gap-7">
        <div className="w-[305px]">
          <p className="text-[rgb(125,125,125)]">
            If you are Looking for a web developer or need help with your
            project then feel free to contact me at
          </p>
          <h1>shahbazshaikh485@gmailcom</h1>
        </div>
        <div className="w-[290px] text-6xl font-extrabold">
          Let's Work Together
        </div>
      </div>
    </>
  );
}
