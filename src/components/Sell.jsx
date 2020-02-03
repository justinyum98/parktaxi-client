import React from 'react';
import { connect } from 'react-redux';
import { sellSpots } from '../redux/actions';

function Sell(props) {
  return (
    <div>
      <button
        onClick={() => {
          const newSpot = {
            lot: 'PANGEA',
            time: Date('20200101')
          };
          props.sellSpots(newSpot);
        }}
      >
      </button>
    </div>
  );
}

export default connect(null, { sellSpots })(Sell);
