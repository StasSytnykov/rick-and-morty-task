import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "../../components/Table/Table";

const mockFn = jest.fn();

describe("CharactersList", () => {
  render(
    <Table
      arrayType={"episode"}
      onSortedByName={mockFn}
      onSortedByNumber={mockFn}
      rulesSortData={"DESC_NAME"}
      sortedFetchedData={[]}
    />
  );

  test("should be render in document", () => {
    expect(screen.getByText("Character name")).toBeInTheDocument();
  });

  test("should call onSortedByName func", () => {
    render(
      <Table
        arrayType={"episode"}
        onSortedByName={mockFn}
        onSortedByNumber={mockFn}
        rulesSortData={"DESC_NAME"}
        sortedFetchedData={[]}
      />
    );
    expect(screen.getByText("Number of episodes")).toBeInTheDocument();
  });

  test("should change styles when I click on table head", () => {
    render(
      <Table
        arrayType={"episode"}
        onSortedByName={mockFn}
        onSortedByNumber={mockFn}
        rulesSortData={"DESC_NAME"}
        sortedFetchedData={[]}
      />
    );
    expect(screen.getByTestId("arrow")).toBeInTheDocument();
  });
});
