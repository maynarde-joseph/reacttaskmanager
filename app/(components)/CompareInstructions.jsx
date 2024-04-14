import React from "react";
import { CompareDrawer } from "./CompareDrawer";

export const CompareInstructions = () => {
  return (
    <div className="p-6">
      <div className="container pt-8">
        <div className="flex flex-row justify-center">
          <h1 className="text-3xl font-bold pr-2">Compare stock preformance</h1>
          <CompareDrawer />
        </div>
        <p className="text-xl text-center mb-2">
          Just select two stocks and watch the magic happen!
        </p>
      </div>
    </div>
  );
};
