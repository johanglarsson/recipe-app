import React from "react";

const TextInput = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.title}</label>
    <input
      type={props.className}
      className="form-control"
      onChange={props.onChange}
      id={props.name}
      name={props.name}
      value={props.value}
    />
  </div>
);
export default TextInput;
