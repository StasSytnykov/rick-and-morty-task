import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const fetchCharacters = async (page: number) => {
  const { data } = await axios.get(`${BASE_URL}character/?page=${page}`);
  return data;
};

const fetchOneCharacter = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}character/${id}`);
  return data;
};

const fetchAllCharacters = async () => {
  const response = await axios.get(`${BASE_URL}character`);
  const charactersIdArr = [];
  for (let i = 1; i <= response.data.info.count; i += 1) {
    charactersIdArr.push(i);
  }
  const { data } = await axios.get(
    `${BASE_URL}character/${charactersIdArr.toString()}`
  );
  return data;
};

const fetchLocation = async () => {
  const response = await axios.get(`${BASE_URL}location`);
  const locationId = [];

  for (let i = 1; i <= response.data.info.count; i += 1) {
    locationId.push(i);
  }

  const { data } = await axios.get(
    `${BASE_URL}location/${locationId.toString()}`
  );
  return data;
};

export {
  fetchCharacters,
  fetchOneCharacter,
  fetchAllCharacters,
  fetchLocation,
};
