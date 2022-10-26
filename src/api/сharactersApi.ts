import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async () => {
  const { data } = await axios.get("character/?page=1");
  return data.results;
};

export default fetchCharacters;
