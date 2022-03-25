import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { recipes } from "../API/recipe";
import SearchBox from "./Searchbox";

class App extends Component {
  state = {
    recipes: recipes,
    searchField: "",
  };
  
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  
  render() {
    const filteredRecipe = this.state.recipes.filter((recipe) => {
      return recipe.title
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc code">
        <h1 className="f1 ma3 washed-blue">Recipe Finder</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <RecipeList recipes={filteredRecipe} />
      </div>
    );
  }
}

export default App;
