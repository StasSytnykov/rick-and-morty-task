import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CharacterItem } from "../../components/CharacterItem/CharacterItem";

describe("CharactersList", () => {
  test("should to render item", () => {
    render(
      <CharacterItem
        selectedCharacter={{
          id: 1,
          name: "Jerry Smith",
          status: "alive",
          species: "human",
          gender: "male",
          image: "str",
          episode: ["m", "a"],
          residents: ["a", "s"],
        }}
      />
    );

    expect(screen.getByText("Jerry Smith")).toBeInTheDocument();
  });
});
