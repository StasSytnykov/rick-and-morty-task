import { CharacterItem } from "../components/CharacterItem/CharacterItem";
import { useAppSelector } from "../hooks/reduxHooks";
import { charactersSelector } from "../redux/characters/charactersSelector";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  const characters = useAppSelector(charactersSelector);
  const { id } = useParams();
  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );

  return selectedCharacter ? (
    <CharacterItem
      name={selectedCharacter.name}
      image={selectedCharacter.image}
      gender={selectedCharacter.gender}
      species={selectedCharacter.species}
      status={selectedCharacter.status}
    />
  ) : (
    <div></div>
  );
};
