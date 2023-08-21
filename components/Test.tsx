"use client";
import { increment } from "@/lib/counterSlice";
import { useSelector, useDispatch } from "react-redux";
const Test = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-lg w-96 h-96 p-16">
      <h2>Current State {count} </h2>
      <button
        className="bg-black p-4 text-white"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Test;
