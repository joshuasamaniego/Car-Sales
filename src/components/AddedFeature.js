import React from 'react';
import { connect } from "react-redux";
import {removeFeature } from "../actions"

const AddedFeature = props => {
  const { removeFeature, feature} = props;
  const handleClick = () => {
    removeFeature(feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeFeature})(AddedFeature);
