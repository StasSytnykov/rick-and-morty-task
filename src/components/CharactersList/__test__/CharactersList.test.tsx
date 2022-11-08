import { render, screen } from "@testing-library/react";
import { CharactersList } from "../CharactersList";
import { MemoryRouter as Router } from "react-router-dom";

describe("CharactersList", () => {
  test("should to render items", () => {
    render(
      <Router>
        <CharactersList />
      </Router>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
