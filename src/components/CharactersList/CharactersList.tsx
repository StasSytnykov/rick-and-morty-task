import { ICharacter } from "../../utils/types";
import { CharactersListStyled } from "./CharactersList.module";

export const CharactersList = ({ characters }: ICharacter[] | any) => {
  return (
    <CharactersListStyled>
      {characters.map((character: ICharacter) => (
        <li key={character.id}>
          <img src={character.image} alt="character" />
          <p>{character.name}</p>
        </li>
      ))}
    </CharactersListStyled>
  );
};
