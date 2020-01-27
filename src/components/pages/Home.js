import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { changeMode } from "../../actions";
import Map from "../Map";
import Pin from "../Pin";

function Home(props) {
  // SHOULD BE STORED IN THE SEVER
  const lotsData = [
    {
      id: "Pangea",
      location: {
        lat: 32.8842556,
        lng: -117.2431062
      }
    },
    {
      id: "Gilman",
      location: {
        lat: 32.8773774,
        lng: -117.2338526
      }
    }
  ];
  return (
    <div>
      <Grid item xs={2}>
        <button onClick={props.changeMode}>changeMode</button>
      </Grid>
      <Grid item xs={9}>
        <Map>
          {lotsData.map(lot => (
            <Pin
              key={lot.id}
              id={lot.id}
              lat={lot.location.lat}
              lng={lot.location.lng}
            >
              dfg
            </Pin>
          ))}
        </Map>
      </Grid>
    </div>
  );
}

export default connect(null, { changeMode })(Home);
