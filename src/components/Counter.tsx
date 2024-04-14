import React from "react";
import { connect } from "react-redux";
import { COUNTERACTIONS } from "../store/counter/action";

const Counter = ({ counter, dispatch }: any, { color }: any) => {
  const handleIncrement = () => {
    dispatch({
      type: COUNTERACTIONS.INCREMENT_COUNTER,
      payload: {},
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: COUNTERACTIONS.DECREMENT_COUNTER,
      payload: {},
    });
  };

  return (
    <>
      {counter}
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
    </>
  );
};

function mapStateToProps({ counter }: any) {
  return { counter };
}

export default connect(mapStateToProps)(Counter);
