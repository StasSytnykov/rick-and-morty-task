import { ICharacter } from "../../utils/types";
import {
  CharactersListStyled,
  CharactersItemStyled,
  CharactersNameStyled,
} from "./CharactersList.module";

export const CharactersList = ({ characters }: ICharacter[] | any) => {
  return (
    <CharactersListStyled>
      {characters.map((character: ICharacter) => (
        <CharactersItemStyled key={character.id}>
          <img src={character.image} alt="character" />
          <CharactersNameStyled>{character.name}</CharactersNameStyled>
        </CharactersItemStyled>
      ))}
    </CharactersListStyled>
  );
};
