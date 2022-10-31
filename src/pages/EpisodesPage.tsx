import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Episodes } from "../components/Episodes/Episodes";
import { getAllCharactersFetch } from "../redux/allCharacters/allCharactersSlice";
import { allCharactersSelector } from "../redux/selectors";

export const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  const allCharacters = useAppSelector(allCharactersSelector);

  useEffect(() => {
    dispatch(getAllCharactersFetch());
  }, [dispatch]);

  return <Episodes allCharacters={allCharacters} />;
};
