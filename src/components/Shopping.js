import React from "react";
import lists from "./lists";

const Shopping = (props) => {
  const lists = props.lists;

  return <ul>{lists}</ul>;
};

export default Shopping;
