import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CharactersList } from "../../components/CharactersList/CharactersList";

const mockFn = jest.fn();

describe("CharactersList", () => {
  test("should to render items", () => {
    render(
      <CharactersList
        characters={[]}
        onLoadMoreCharacters={mockFn}
        charactersCount={826}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
