import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Loader } from "../Loader/Loader";
import { FetchedObject } from "../../utils/types";
import {
  CharactersListStyled,
  CharactersItemStyled,
  CharactersNameStyled,
  CharactersEndedText,
} from "./CharactersList.module";

interface Props {
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
  charactersCount: number;
}

export const CharactersList = ({
  characters,
  onLoadMoreCharacters,
  charactersCount,
}: Props) => {
  return characters ? (
    <InfiniteScroll
      dataLength={characters.length}
      next={() => onLoadMoreCharacters()}
      hasMore={characters.length < charactersCount}
      loader={<Loader />}
      endMessage={<CharactersEndedText>Characters ended</CharactersEndedText>}
    >
      <CharactersListStyled>
        {characters.map((character: FetchedObject) => (
          <CharactersItemStyled key={character.id}>
            <Link href={`character/${character.id}`}>
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
  ) : (
    <h2>Error!</h2>
  );
};
