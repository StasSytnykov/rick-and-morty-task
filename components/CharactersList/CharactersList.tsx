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
import { useInfiniteQuery } from "react-query";
import { fetchCharacters } from "../../utils/fetchData";

export const CharactersList = () => {
  const { data, isSuccess, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) => {
      const delay = (s: number) =>
        new Promise((resolve) => setTimeout(resolve, s));
      await delay(2000);
      return fetchCharacters(pageParam);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          return pages.length + 1;
        }
      },
    }
  );

  return isSuccess ? (
    <InfiniteScroll
      dataLength={data?.pages.length * 20}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<Loader />}
      endMessage={<CharactersEndedText>Characters ended</CharactersEndedText>}
    >
      <CharactersListStyled>
        {data?.pages.map((page: { results: FetchedObject[] }) =>
          page.results.map((character: FetchedObject) => (
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
          ))
        )}
      </CharactersListStyled>
    </InfiniteScroll>
  ) : (
    <Loader />
  );
};
