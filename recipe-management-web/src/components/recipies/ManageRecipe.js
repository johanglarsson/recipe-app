import React, { useState, useEffect } from "react";
import RecipeForm from "./RecipeForm";
import * as recipeApi from "../../api/recipeApi";
import { toast } from "react-toastify";

const ManageRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    id: null,
    title: "",
    description: "",
    uri: "",
    rating: 0,
  });

  useEffect(() => {
    let id = props.match.params.id;
    if (id) {
      recipeApi.getRecipeById(id).then((recipe) => {
        setRecipe(recipe);
      });
    }
  }, [props.match.params.id]);

  function handleChange(event) {
    const updateRecipe = {
      ...recipe,
      [event.target.name]: event.target.value,
    };
    setRecipe(updateRecipe);
  }

  function handleRatingChange(event, newValue) {
    const updateRecipe = {
      ...recipe,
      rating: newValue,
    };
    setRecipe(updateRecipe);
  }

  function handleSubmit(event) {
    event.preventDefault();
    recipeApi.saveRecipe(recipe).then(() => {
      // Navigate back to the list of recipies
      toast.success("Recipe saved.");
      props.history.push("/recipies");
    });
  }

  return (
    <>
      <h1>Manage recipe</h1>
      <RecipeForm
        recipe={recipe}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onRatingChange={handleRatingChange}
      />
    </>
  );
};

export default ManageRecipe;
