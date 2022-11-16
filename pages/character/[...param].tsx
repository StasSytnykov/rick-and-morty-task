import { CharacterItem } from "../../components/CharacterItem/CharacterItem";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";

const CharacterPage = () => {
  const router = useRouter();
  const { param } = router.query;
  const { characters } = useContext(CharactersContext);
  const selectedCharacter = characters.find(
    (character) => character.id === Number(param)
  );

  return selectedCharacter ? (
    <CharacterItem selectedCharacter={selectedCharacter} />
  ) : (
    <div>Character not found</div>
  );
};

export default CharacterPage;
