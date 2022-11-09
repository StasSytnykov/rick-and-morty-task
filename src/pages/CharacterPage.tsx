import { Loader } from "../components/Loader/Loader";
import { CharacterItem } from "../components/CharacterItem/CharacterItem";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TemplateCharactersContext } from "../context/TemplateCharactersContext";

export const CharacterPage = () => {
  const { id } = useParams();
  const { characters, loadingStatus } = useContext(TemplateCharactersContext);
  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );
  const isShowLoader = loadingStatus === "idle" || loadingStatus === "loading";

  return isShowLoader ? (
    <Loader />
  ) : selectedCharacter ? (
    <CharacterItem selectedCharacter={selectedCharacter} />
  ) : (
    <div>Character not found</div>
  );
};
