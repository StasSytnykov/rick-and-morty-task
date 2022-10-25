import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "CHARACTERS_FETCH_REQUESTED" });
  }, [dispatch]);

  return (
    <div>
      <ul>
        <li>Test</li>
      </ul>
    </div>
  );
};
