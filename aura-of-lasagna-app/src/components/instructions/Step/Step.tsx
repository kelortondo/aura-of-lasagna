import React, { FC } from "react";

interface StepProps {
  text: string;
}

const Step: FC<StepProps> = ({ text }) => (
  <li data-testid="Step" style={{ marginBottom: "4px" }}>
    {text}
  </li>
);

export default Step;
