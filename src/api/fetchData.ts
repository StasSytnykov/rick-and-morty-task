import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async (page: number) => {
  const { data } = await axios.get(`character/?page=${page}`);
  return data.results;
};

// const fetchEpisodes = async () => {
//   const { data } = await axios.get("episode");
//   return data.results;
// };

export { fetchCharacters };
