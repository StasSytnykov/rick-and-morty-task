import { CharacterItem } from "../components/CharacterItem/CharacterItem";
import { useAppSelector } from "../hooks/reduxHooks";
import { charactersSelector } from "../redux/selectors";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const characters = useAppSelector(charactersSelector);
  const { id } = useParams();
  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );

  return selectedCharacter ? (
    <CharacterItem selectedCharacter={selectedCharacter} />
  ) : (
    <div>Character not found</div>
  );
};
