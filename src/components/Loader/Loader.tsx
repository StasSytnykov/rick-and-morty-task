import { ClockLoader } from "react-spinners";
import { LoaderThumb } from "./Loader.styled";

export const Loader = () => (
  <LoaderThumb>
    <ClockLoader size={100} color={"#8b36d6"} />
  </LoaderThumb>
);
