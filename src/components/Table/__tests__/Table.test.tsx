import { render, screen } from "@testing-library/react";
import { Table } from "../Table";

const mockFn = jest.fn();

describe("CharactersList", () => {
  render(
    <Table
      arrayType={"episode"}
      loadingStatus={"success"}
      onSortedByName={mockFn}
      onSortedByNumber={mockFn}
      rulesSortData={"DESC_NAME"}
      sortedFetchedData={[]}
    />
  );

  test("should be render in document", () => {
    const TableHeadByName = screen.getByText("Character name");

    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should call onSortedByName func", () => {
    render(
      <Table
        arrayType={"episode"}
        loadingStatus={"success"}
        onSortedByName={mockFn}
        onSortedByNumber={mockFn}
        rulesSortData={"DESC_NAME"}
        sortedFetchedData={[]}
      />
    );
    const TableHeadByName = screen.getByText("Number of episodes");
    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should change styles when I click on table head", () => {
    render(
      <Table
        arrayType={"episode"}
        loadingStatus={"success"}
        onSortedByName={mockFn}
        onSortedByNumber={mockFn}
        rulesSortData={"DESC_NAME"}
        sortedFetchedData={[]}
      />
    );
    const TableHeadByName = screen.getByTestId("arrow");
    expect(TableHeadByName).toBeInTheDocument();
  });
});
