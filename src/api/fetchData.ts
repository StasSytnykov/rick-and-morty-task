import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async (page: number) => {
  const { data } = await axios.get(`character/?page=${page}`);
  return data.results;
};

const fetchAllCharacters = async () => {
  const response = await axios.get("character");
  const charactersIdArr = [];
  for (let i = 1; i <= response.data.info.count; i += 1) {
    charactersIdArr.push(i);
  }
  const { data } = await axios.get(`character/${charactersIdArr.toString()}`);
  return data;
};

export { fetchCharacters, fetchAllCharacters };
