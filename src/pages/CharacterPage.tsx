import { CharacterItem } from "../components/CharacterItem/CharacterItem";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TemplateCharactersContext } from "../context/TemplateCharactersContext";

export const CharacterPage = () => {
  const { id } = useParams();
  const { characters } = useContext(TemplateCharactersContext);
  console.log(characters);
  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );

  return selectedCharacter ? (
    <CharacterItem selectedCharacter={selectedCharacter} />
  ) : (
    <div>Character not found</div>
  );
};
