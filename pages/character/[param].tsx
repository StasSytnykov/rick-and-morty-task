import type { GetStaticProps, GetStaticPaths } from "next";
import { CharacterItem } from "../../components/CharacterItem/CharacterItem";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchOneCharacter } from "../../utils/fetchData";
import { FetchedObject } from "../../utils/types";

interface Props {
  character: FetchedObject;
}

const CharacterPage = ({ character }: Props) => {
  const router = useRouter();
  const characterID =
    typeof router.query?.param === "string" ? router.query.param : "";

  const { isSuccess, data, isError } = useQuery(
    ["getCharacter", characterID],
    async () => fetchOneCharacter(characterID)
  );

  if (isSuccess) {
    return <CharacterItem selectedCharacter={data} />;
  }

  if (isError) return <div>Character not found</div>;

  return <></>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.param as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getCharacter", id], () =>
    fetchOneCharacter(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default CharacterPage;
