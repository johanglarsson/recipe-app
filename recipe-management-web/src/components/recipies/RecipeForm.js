import React from "react";
import TextInput from "./TextInput";
import { Rating } from "@material-ui/lab";

const RecipeForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        onChange={props.onChange}
        name="title"
        title="Title"
        value={props.recipe.title}
      />
      <TextInput
        onChange={props.onChange}
        name="description"
        title="Description"
        value={props.recipe.description}
      />
      <TextInput
        onChange={props.onChange}
        name="uri"
        title="Recipe link"
        value={props.recipe.uri}
      />

      <div className="form-group">
        <label htmlFor={props.rating}>Rating</label>
        <Rating
          id="rating"
          className="form-control"
          onChange={props.onRatingChange}
          value={props.recipe.rating}
          name="rating"
          precision={0.5}
        ></Rating>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
