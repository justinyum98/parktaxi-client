import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { changeMode } from "../../actions";
import Map from "../Map";
import Pin from "../Pin";
import Buy from "../Buy";
import Sell from "../Sell";

function Home(props) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{ flex: 2 }}>
        <Map></Map>
      </div>
      <div style={{ flex: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={props.form.mode === "buy"}
              onChange={props.changeMode}
              color="primary"
              value="dynamic-class-name"
            />
          }
          label={
            props.form.mode === "buy"
              ? "Looking for a spot?"
              : "Are you leaving?"
          }
        />
        {props.form.mode === "buy" ? <Buy></Buy> : <Sell></Sell>}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps, { changeMode })(Home);
