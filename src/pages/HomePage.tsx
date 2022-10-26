import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getCharactersFetch } from "../redux/characters/charactersSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharactersFetch());
  }, [dispatch]);

  return (
    <div>
      <ul>
        <li>Test</li>
      </ul>
    </div>
  );
};
