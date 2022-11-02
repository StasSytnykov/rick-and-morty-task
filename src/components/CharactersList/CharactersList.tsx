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

const MAX_CHARACTERS = 826;

export const CharactersList = ({ characters, onLoadMoreCharacters }: Props) => {
  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={onLoadMoreCharacters}
      hasMore={characters.length < MAX_CHARACTERS}
      loader={
        <CharactersLoaderThumb>
          <Loader />
        </CharactersLoaderThumb>
      }
      endMessage={<CharactersEndedText>Characters ended</CharactersEndedText>}
    >
      <CharactersListStyled>
        {characters.map((character: ICharacter) => (
          <CharactersItemStyled key={character.id}>
            <Link to={`character/id=${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
              />
              <CharactersNameStyled>{character.name}</CharactersNameStyled>
            </Link>
          </CharactersItemStyled>
        ))}
      </CharactersListStyled>
    </InfiniteScroll>
  );
};
