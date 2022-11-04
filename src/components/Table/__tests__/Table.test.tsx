import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "../Table";

const mockFn = jest.fn();
const onClickTableHead = jest.fn();

describe("CharactersList", () => {
  render(
    <Table
      isLoading={"success"}
      onSortedByNumber={mockFn}
      onSortedByName={onClickTableHead}
      sortedData={[]}
      rulesSortData="DESC_NAME"
      arrayType={"episode"}
    />
  );

  test("should be render in document", () => {
    const TableHeadByName = screen.getByText("Character name");

    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should call onSortedByName func", () => {
    render(
      <Table
        isLoading={"success"}
        onSortedByNumber={mockFn}
        onSortedByName={onClickTableHead}
        sortedData={[]}
        rulesSortData="DESC_NAME"
        arrayType={"episode"}
      />
    );
    const TableHeadByName = screen.getByText("Character name");
    fireEvent.click(TableHeadByName);
    expect(onClickTableHead).toBeCalled();
  });

  test("should change styles when I click on table head", () => {
    render(
      <Table
        isLoading={"success"}
        onSortedByNumber={mockFn}
        onSortedByName={onClickTableHead}
        sortedData={[]}
        rulesSortData="DESC_NAME"
        arrayType={"episode"}
      />
    );
    const TableHeadByName = screen.getByTestId("arrow");
    expect(TableHeadByName).toBeInTheDocument();
  });
});
