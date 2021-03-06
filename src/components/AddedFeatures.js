import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/feauturesActions";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  console.log("props", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    // id: state.additionalFeatures.id,
    // name: state.additionalFeatures.name,
    // price: state.additionalFeatures.price,
    features: state.car.features
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
