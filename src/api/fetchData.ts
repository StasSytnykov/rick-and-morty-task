import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async (page: number) => {
  const { data } = await axios.get(`character/?page=${page}`);
  return data.results;
};

const fetchEpisodes = async () => {
  const pageOne = await axios.get("episode/?page=1");
  const pageTwo = await axios.get("episode/?page=2");
  const pageThree = await axios.get("episode/?page=3");
  return [
    ...pageOne.data.results,
    ...pageTwo.data.results,
    ...pageThree.data.results,
  ];
};

export { fetchCharacters, fetchEpisodes };
