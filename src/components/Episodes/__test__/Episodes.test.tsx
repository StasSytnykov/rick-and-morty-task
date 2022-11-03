import { render, screen, fireEvent } from "@testing-library/react";
import { Episodes } from "../Episodes";

const mockFn = jest.fn();
const onClickTableHead = jest.fn();

describe("CharactersList", () => {
  render(
    <Episodes
      isLoading={"success"}
      onSortedByNumber={mockFn}
      onSortedByName={onClickTableHead}
      sortedCharacters={[]}
      rulesSortCharacters="DESC_NAME"
    />
  );

  test("should be render in document", () => {
    const TableHeadByName = screen.getByText("Character name");

    expect(TableHeadByName).toBeInTheDocument();
  });

  test("should call onSortedByName func", () => {
    render(
      <Episodes
        isLoading={"success"}
        onSortedByNumber={mockFn}
        onSortedByName={onClickTableHead}
        sortedCharacters={[]}
        rulesSortCharacters="DESC_NAME"
      />
    );
    const TableHeadByName = screen.getByText("Character name");
    fireEvent.click(TableHeadByName);
    expect(onClickTableHead).toBeCalled();
  });

  test("should change styles when I click on table head", () => {
    render(
      <Episodes
        isLoading={"success"}
        onSortedByNumber={mockFn}
        onSortedByName={onClickTableHead}
        sortedCharacters={[]}
        rulesSortCharacters="DESC_NAME"
      />
    );
    const TableHeadByName = screen.getByTestId("arrow");
    expect(TableHeadByName).toBeInTheDocument();
  });
});
