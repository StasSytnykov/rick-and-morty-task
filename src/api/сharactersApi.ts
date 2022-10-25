import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const fetchData = async () => {
  const { data } = await axios.get("character/?page=1");
  console.log(data);
  return data;
};

export default fetchData;
