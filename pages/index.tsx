import { CharactersList } from "../components/CharactersList/CharactersList";
import { fetchCharacters } from "../utils/fetchData";
import { FetchedObject } from "../utils/types";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export interface Props {
  data: {
    info: { count: number; next: string; prev: string | null; pages: number };
    results: FetchedObject[];
  };
}

const HomePage = ({ data }: Props) => {
  const [page, setPage] = useState<number>(1);
  const queryClient = useQueryClient();

  const { data: characters } = useQuery<FetchedObject[]>(
    ["characters"],
    () => fetchCharacters(),
    {
      initialData: data.results,
      refetchOnMount: false,
    }
  );

  useEffect(() => {
    setPage(characters.length / 20);
  }, [characters.length]);

  const mutation = useMutation({
    mutationFn: async () => {
      setPage((prevState) => prevState + 1);
      const delay = new Promise((resolve) => setTimeout(resolve, 2000));
      await delay;
      return await fetchCharacters(page + 1);
    },
    onSuccess: (data) => {
      const { results } = data;
      queryClient.setQueryData(["characters"], [...characters, ...results]);
    },
  });

  return (
    <CharactersList
      characters={characters}
      onLoadMoreCharacters={mutation.mutate}
      charactersCount={data.info.count}
    />
  );
};

export const getServerSideProps = async () => {
  const data = await fetchCharacters();
  return { props: { data } };
};

export default HomePage;
