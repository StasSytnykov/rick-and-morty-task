import axios from "axios";
import { fetchCharacters } from "../fetchData";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchAllCharacters", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return characters", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            status: "alive",
            species: "human",
            gender: "male",
            image: "s",
            episode: ["s", "2"],
          },
          {
            id: 2,
            name: "Morty",
            status: "alive",
            species: "human",
            gender: "male",
            image: "s",
            episode: ["s", "2"],
          },
        ],
      },
    });

    const characters = await fetchCharacters(1);
    expect(characters).toEqual([
      {
        id: 1,
        name: "Rick Sanchez",
        status: "alive",
        species: "human",
        gender: "male",
        image: "s",
        episode: ["s", "2"],
      },
      {
        id: 2,
        name: "Morty",
        status: "alive",
        species: "human",
        gender: "male",
        image: "s",
        episode: ["s", "2"],
      },
    ]);
  });
});
