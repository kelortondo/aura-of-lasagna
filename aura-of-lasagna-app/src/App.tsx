import React from "react";
import "./App.css";
import LasagnaRecipe from "./components/LasagnaRecipe/LasagnaRecipe";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" className="App" sx={{ marginLeft: 0 }}>
      <LasagnaRecipe></LasagnaRecipe>
    </Container>
  );
}

export default App;
