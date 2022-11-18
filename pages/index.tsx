import { CharactersList } from "../components/CharactersList/CharactersList";
// import { fetchCharacters } from "../utils/fetchData";
// import { FetchedObject } from "../utils/types";
// import { useState } from "react";

const HomePage = () => {
  return <CharactersList />;
};

// export const getServerSideProps = async () => {
//   const data = await fetchCharacters(1);
//
//   return { props: { characters: data, page: 1 } };
// };

export default HomePage;
