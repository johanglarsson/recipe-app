import React from "react";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

const RecipiesList = (props) => (
  <div className="container-fluid">
    <table className="table table-responsive">
      <thead>
        <tr>
          <th>Id</th>
          <th>Recipe</th>
          <th>Link</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.recipies.map((recipe) => {
          return (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>
                <Link to={"recipe/" + recipe.id}> {recipe.title}</Link>
              </td>
              <td>
                <a href={recipe.uri}>{recipe.uri}</a>
              </td>
              <td>
                <Rating readOnly={true} value={recipe.rating} precision={0.5} />
              </td>
              <td>
                <button
                  onClick={() => props.onDelete(recipe.id)}
                  className="btn btn-light"
                >
                  Ta bort
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default RecipiesList;
