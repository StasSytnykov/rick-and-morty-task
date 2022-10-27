import InfiniteScroll from "react-infinite-scroll-component";
import { ICharacter } from "../../utils/types";
import {
  CharactersListStyled,
  CharactersItemStyled,
  CharactersNameStyled,
} from "./CharactersList.module";

interface Props {
  characters: ICharacter[];
  onLoadMoreCharacters: () => void;
}

export const CharactersList = (props: Props) => {
  return (
    <InfiniteScroll
      dataLength={props.characters.length}
      next={props.onLoadMoreCharacters}
      hasMore={props.characters.length < 826}
      loader={<h4>Loading...</h4>}
      endMessage={<h2>Characters ended</h2>}
    >
      <CharactersListStyled>
        {props.characters.map((character: ICharacter) => (
          <CharactersItemStyled key={character.id}>
            <img src={character.image} alt="character" />
            <CharactersNameStyled>{character.name}</CharactersNameStyled>
          </CharactersItemStyled>
        ))}
      </CharactersListStyled>
    </InfiniteScroll>
  );
};
