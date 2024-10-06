import React, { FC } from "react";
import IngredientList from "../ingredients/IngredientList/IngredientList";
import { IngredientProps } from "../ingredients/Ingredient/Ingredient";
import InstructionsList from "../instructions/InstructionsList/InstructionsList";
import Stack from "@mui/material/Stack";

interface LasagnaRecipeProps {}

const ingredients: IngredientProps[] = [
  { quantity: 3, unit: "", description: "large carrots, chopped" },
  { quantity: 1, unit: "", description: "red bell pepper,chopped" },
  { quantity: 1, unit: "", description: "medium zucchini,chopped" },
  { quantity: 1, unit: "", description: "medium yellow onion, chopped" },
  { quantity: 2, unit: "cloves", description: "garlic, minced" },
  { quantity: 6, unit: "oz", description: "baby spinach" },
  { quantity: 28, unit: "oz", description: "Rao's tomato sauce" },
  { quantity: 9, unit: "", description: "lasagna noodles (recommend Barilla)" },
  { quantity: 16, unit: "oz", description: "ricotta cheese" },
  { quantity: 8, unit: "oz", description: "shredded mozarella cheese" },
  { quantity: 0.25, unit: "cup", description: "freshly grated paremsan" },
];

const instructions: string[] = [
  "Preheat the oven to 425°F and put a large stock pot of water to boil. Add some salt and a few glugs of olive oil to the water.",
  "Heat ~2 tbsp olive oil in a large skillet over medium heat. Add chopped vegetables, salt, and pepper. Cook, stirring every few minutes, until veggies are golden on the edges (~10 min).",
  "Add minced garlic and cook for ~1 minute, until fragrant.",
  "Add a few handfuls of spinach and cook until wilted. Repeat until all spinach is added.",
  "Transfer veggie mixture to a blender and pulse several times, until finely chopped but not pureed. Remove veggies and combine in a mixing bowl with ricotta. Stir until uniform.",
  "When the water comes to a boil, add the pasta and cook for 1 minute less than package directions. When done, drain the pasta and toss with EVOO to prevent sticking.",
  "Coat the bottom of a 9x13 baking dish with a thin layer of red sauce. Place 3 noodles on top. Top with 1/2 of the veggie and ricotta mixture. Pour a thin layer of tomato sauce on top of that, then sprinkle with 1/3 of the mozarella.",
  "Add another layer of noodles, the remaining veggie and ricotta mixture, more red sauce, and 1/3 of the mozarella.",
  "Add the final layer of noodles, remaining red sauce, remaining mozarella, and top with freshly grated parmesan.",
  "Cover with foil and bake, covered, for 20 minutes.",
  "Uncover, rotate 180 degrees, and cook for 10-15 more minutes or until the top is starting to brown.",
  "Remove from the oven and let cool for 10 minutes if your family allows. Enjoy!",
];

const LasagnaRecipe: FC<LasagnaRecipeProps> = () => {
  return (
    <Stack data-testid="LasagnaRecipe">
      <h1>Vegetable Lasagna</h1>

      <i>"Yoooo this lasagna. It has an aura." - Anonymous</i>

      <IngredientList ingredients={ingredients}></IngredientList>
      <InstructionsList steps={instructions}></InstructionsList>
    </Stack>
  );
};

export default LasagnaRecipe;
