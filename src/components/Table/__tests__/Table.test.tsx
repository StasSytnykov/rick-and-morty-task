import { render, screen } from "@testing-library/react";
import { Table } from "../Table";

describe("CharactersList", () => {
  render(<Table />);

  test("should be render in document", () => {
    const TableHeadByName = screen.getByText("Character name");

    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should call onSortedByName func", () => {
    render(<Table />);
    const TableHeadByName = screen.getByText("Number of episodes");
    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should change styles when I click on table head", () => {
    render(<Table />);
    const TableHeadByName = screen.getByTestId("arrow");
    expect(TableHeadByName).toBeInTheDocument();
  });
});
