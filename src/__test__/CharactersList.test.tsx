import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CharactersList } from "../../components/CharactersList/CharactersList";

describe("CharactersList", () => {
  test("should to render items", () => {
    render(<CharactersList />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
