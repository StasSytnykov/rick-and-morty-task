import { useContext } from "react";
import { Table } from "../components/Table/Table";
import { LocationsContext } from "../context/LocationContext";

export const LocationPage = () => {
  const { error } = useContext(LocationsContext);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Table contextType={"location"} />
  );
};
