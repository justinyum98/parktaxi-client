import React from "react";
import { getSpots, changeMode } from "../actions";

export default function Buy() {
  return (
    <p>
      <button onSubmit={getSpots}>buy</button>
    </p>
  );
}
