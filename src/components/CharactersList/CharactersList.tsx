import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { ICharacter } from "../../utils/types";
import {
  CharactersLoaderThumb,
  CharactersListStyled,
  CharactersItemStyled,
  CharactersNameStyled,
  CharactersEndedText,
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
      loader={
        <CharactersLoaderThumb>
          <Loader />
        </CharactersLoaderThumb>
      }
      endMessage={<CharactersEndedText>Characters ended</CharactersEndedText>}
    >
      <CharactersListStyled>
        {props.characters.map((character: ICharacter) => (
          <Link to={`character/${character.id}`}>
            <CharactersItemStyled key={character.id}>
              <img src={character.image} alt={character.name} />
              <CharactersNameStyled>{character.name}</CharactersNameStyled>
            </CharactersItemStyled>
          </Link>
        ))}
      </CharactersListStyled>
    </InfiniteScroll>
  );
};
