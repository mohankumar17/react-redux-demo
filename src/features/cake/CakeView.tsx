import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/Hooks";

import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>No. of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cake</button>
    </div>
  );
}

export default CakeView;
