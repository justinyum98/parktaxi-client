import React from "react";
import { sellSpots } from "../actions";
import { connect } from "react-redux";

function Sell(props) {
  return (
    <div>
      <button
        onClick={() => {
          const newSpot = {
            lot: "PANGEA",
            time: Date("20200101")
          };
          props.sellSpots(newSpot);
        }}
      ></button>
    </div>
  );
}

export default connect(null, { sellSpots })(Sell);
