import axios, { AxiosResponse } from "axios";
import { fetchCharacters, fetchLocation } from "../fetchData";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchAllCharacters", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return characters", async () => {
    const charactersData = {
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "alive",
          species: "human",
          gender: "male",
          image: "s",
        },
        {
          id: 2,
          name: "Morty",
          status: "alive",
          species: "human",
          gender: "male",
          image: "s",
        },
      ],
    };

    const mockedResponse: AxiosResponse = {
      data: charactersData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValue(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const characters = await fetchCharacters(1);
    expect(axios.get).toHaveBeenCalled();
    expect(characters).toEqual(charactersData.results);
  });

  test("should return location data", async () => {
    const locationsData = {
      info: {
        count: 42,
      },
      results: [
        {
          id: 1,
          name: "Earth",
          residents: ["1", "2", "230"],
        },
        {
          id: 2,
          name: "Mars",
          residents: ["50", "60"],
        },
      ],
    };

    const mockedResponse: AxiosResponse = {
      data: locationsData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValue(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const locations = await fetchLocation();
    expect(axios.get).toHaveBeenCalled();
    expect(locations).toEqual(locationsData);
  });
});
