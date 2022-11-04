import { render, screen } from "@testing-library/react";
import { CharactersList } from "../CharactersList";
import { MemoryRouter as Router } from "react-router-dom";

const mockFn = jest.fn();

describe("CharactersList", () => {
  test("should to render items", () => {
    render(
      <Router>
        <CharactersList
          onLoadMoreCharacters={mockFn}
          characters={[
            {
              id: 1,
              name: "Rick Sanchez",
              status: "alive",
              species: "human",
              gender: "male",
              image: "str",
              episode: ["m", "a"],
              residents: ["a", "s"],
            },
            {
              id: 2,
              name: "Rick Sanchez",
              status: "alive",
              species: "human",
              gender: "male",
              image: "str",
              episode: ["m", "a"],
              residents: ["a", "s"],
            },
            {
              id: 3,
              name: "Rick Sanchez",
              status: "alive",
              species: "human",
              gender: "male",
              image: "str",
              episode: ["m", "a"],
              residents: ["a", "s"],
            },
          ]}
        />
      </Router>
    );

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });
});
