import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/Hooks";
import { ordered, restocked } from "./iceCreamSlice";

function IceCreamView() {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>No. of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <button onClick={() => dispatch(restocked(1))}>Restock iceCream</button>
    </div>
  );
}

export default IceCreamView;
