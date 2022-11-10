import { CharacterItem } from "../components/CharacterItem/CharacterItem";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export const CharacterPage = () => {
  const { id } = useParams();
  const { characters } = useContext(CharactersContext);
  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );

  return selectedCharacter ? (
    <CharacterItem selectedCharacter={selectedCharacter} />
  ) : (
    <div>Character not found</div>
  );
};
