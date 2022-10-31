import { Episodes } from "../components/Episodes/Episodes";
import { useEffect } from "react";
import { getEpisodesFetch } from "../redux/episodes/episodesSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchEpisodes } from "../api/fetchData";

export const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  fetchEpisodes().then((data) => {
    console.log(data);
  });

  useEffect(() => {
    dispatch(getEpisodesFetch());
  }, [dispatch]);

  return <Episodes />;
};
