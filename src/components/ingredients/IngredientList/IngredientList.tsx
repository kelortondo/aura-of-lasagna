import React, { FC, useState } from "react";
import Ingredient, { IngredientProps } from "../Ingredient/Ingredient";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

interface IngredientListProps {
  multiplier?: number;
  ingredients: IngredientProps[];
}

const IngredientList: FC<IngredientListProps> = ({ ingredients }) => {
  const [multiplier, setMultiplier] = useState(1);

  function handleMultiplierButtonClick(m: number) {
    setMultiplier(m);
  }

  const theme = createTheme({
    palette: {
      primary: grey,
    },
  });

  return (
    <div>
      <h2>Ingredients</h2>
      <ThemeProvider theme={theme}>
        <ButtonGroup size="small" sx={{ marginBottom: "8px" }}>
          <Button
            variant={multiplier === 1 ? "contained" : "outlined"}
            onClick={() => handleMultiplierButtonClick(1)}
          >
            1x
          </Button>
          <Button
            variant={multiplier === 2 ? "contained" : "outlined"}
            onClick={() => handleMultiplierButtonClick(2)}
          >
            2x
          </Button>
          <Button
            variant={multiplier === 3 ? "contained" : "outlined"}
            onClick={() => handleMultiplierButtonClick(3)}
          >
            3x
          </Button>
        </ButtonGroup>
      </ThemeProvider>
      <table data-testid="IngredientList">
        <thead>
          <tr>
            <th style={{ paddingRight: "8px" }}>Quantity</th>
            <th style={{ textAlign: "left" }}>Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, i) => (
            <Ingredient
              quantity={ingredient.quantity * multiplier}
              unit={ingredient.unit}
              description={ingredient.description}
              key={i}
            ></Ingredient>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;
