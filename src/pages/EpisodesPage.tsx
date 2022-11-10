import { Table } from "../components/Table/Table";
import { useContext } from "react";
import { EpisodesContext } from "../context/EpisodesContext";

export const EpisodesPage = () => {
  const { error } = useContext(EpisodesContext);
  return error ? <div>{error.message}</div> : <Table contextType={"episode"} />;
};
