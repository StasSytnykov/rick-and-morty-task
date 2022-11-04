import { render, screen } from "@testing-library/react";
import { CharactersList } from "../CharactersList";
import { MemoryRouter as Router } from "react-router-dom";

const mockFn = jest.fn();

describe("CharactersList", () => {
  test("should to render item", () => {
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
          ]}
        />
      </Router>
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });
});
