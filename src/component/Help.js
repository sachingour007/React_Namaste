import React, { useState } from "react";
import { helpData } from "../constants/helpData";

import AcordianHelp from "./AcordianHelp";
const Help = () => {
  return (
    <main className="bg-blue-100 -mt-7 flex items-center justify-center flex-col">
      <div className="shadow-2xl bg-white w-[90vw] max-w-[800px] my-16 mx-auto p-8 rounded-lg">
        <div className="mb-10">
          <h1 className="text-black text-lg font-bold">Help & Support</h1>
          <p className="text-black text-sm ">
            Let's take a step ahead and help you better
          </p>
        </div>

        <section className="p-3">
          {helpData.map((help) => {
            return <AcordianHelp key={help.id} {...help} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Help;
