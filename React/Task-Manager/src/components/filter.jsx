import { useDispatch } from "react-redux";
import { setFilter } from "../features/filter/filterSlice";

function Filter() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setFilter())}>
      Change Filter
    </button>
  );
}

export default Filter;
