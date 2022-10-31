import { Episodes } from "../components/Episodes/Episodes";
import { fetchAllCharacters } from "../api/fetchData";

export const EpisodesPage = () => {
  fetchAllCharacters().then((data) => {
    console.log(data);
  });
  return <Episodes />;
};
