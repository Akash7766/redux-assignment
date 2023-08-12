import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { selectCounterValue } from "../redux/counter/counterSelector";
import { decrement, increment } from "../redux/counter/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useAppSelector(selectCounterValue);

  console.log(counter);
  return (
    <div>
      <h1>This is home {counter}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="py-3 px-6 border"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="py-3 px-6 border"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
