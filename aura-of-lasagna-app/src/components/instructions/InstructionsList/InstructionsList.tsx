import React, { FC } from "react";
import Step from "../Step/Step";

interface InstructionsListProps {
  steps: string[];
}

const InstructionsList: FC<InstructionsListProps> = ({ steps }) => (
  <div>
    <h2>Instructions</h2>
    <ol data-testid="InstructionsList">
      {steps.map((step, i) => (
        <Step text={step} key={i}></Step>
      ))}
    </ol>
  </div>
);

export default InstructionsList;
