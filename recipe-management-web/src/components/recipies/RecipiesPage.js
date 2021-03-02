import { React, useEffect, useState } from "react";
import * as recipeApi from "../../api/recipeApi";
import RecipiesList from "./RecipiesList";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecipiesPage = () => {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    // Set state for the component
    recipeApi.getRecipies().then((recipies) => setRecipies(recipies));
  }, [recipies.length]);

  function handleDelete(id) {
    recipeApi.deleteRecipeById(id).then(() => {
      toast.success("Deleted");
      recipeApi.getRecipies().then((recipies) => setRecipies(recipies));
    });
  }

  return (
    <div>
      <h2>Recipes</h2>
      <RecipiesList recipies={recipies} onDelete={handleDelete} />
      <Link className="btn btn-primary" to="/recipe">
        Add Recipe
      </Link>
    </div>
  );
};
export default RecipiesPage;
