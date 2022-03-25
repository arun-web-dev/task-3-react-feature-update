import React from "react";
import Card from "../Components/Card";
const RecipeList = ({ recipes, optionalRecipe }) => {
  return (
    <div className="App">
      {recipes.length === 0
        ? optionalRecipe
            .map((recipe) => {
              return (
                <Card
                  key={recipe.id}
                  class="recipe-container"
                  image={recipe.image}
                  publisher={recipe.publisher}
                  title={recipe.title}
                />
              );
            })
            .splice(0, 20)
        : recipes
            .map((recipe) => {
              return (
                <Card
                  key={recipe.id}
                  class="recipe-container"
                  image={recipe.image}
                  publisher={recipe.publisher}
                  title={recipe.title}
                />
              );
            })
            .splice(0, 20)}
    </div>
  );
};

export default RecipeList;
