import React, { FC } from "react";

export interface IngredientProps {
  quantity: number;
  unit: string;
  description: string;
}

const Ingredient: FC<IngredientProps> = ({ quantity, unit, description }) => (
  <tr data-testid="Ingredient" style={{ textAlign: "left" }}>
    <td style={{ textAlign: "right", paddingRight: "8px" }}>
      {quantity} {unit}
    </td>
    <td>{description}</td>
  </tr>
);

export default Ingredient;
