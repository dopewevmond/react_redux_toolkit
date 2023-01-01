import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [changeByAmount, setChangeByAmount] = useState(0);
  const addValue = Number(changeByAmount) || 0;
  const resetAll = () => {
    setChangeByAmount(0);
    dispatch(reset());
  };
  const dispatch = useDispatch();
  return (
    <section>
      <p> {count} </p>
      <div>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(increment())}> + </button>
      </div>

      <input
        type='text'
        value={changeByAmount}
        onChange={(e) => setChangeByAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment amount</button>
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>Decrement amount</button>
      </div>
    </section>
  );
};

export default Counter;
