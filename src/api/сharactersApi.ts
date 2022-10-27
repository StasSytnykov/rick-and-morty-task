import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async (page: number) => {
  const { data } = await axios.get(`character/?page=${page}`);
  return data.results;
};

export default fetchCharacters;

export {};
