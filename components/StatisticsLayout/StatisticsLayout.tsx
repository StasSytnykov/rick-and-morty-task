import { Statistics } from "../Statistics/Statistics";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const StatisticsLayout = ({ children }: Props) => (
  <>
    <Statistics />
    {children}
  </>
);

export default StatisticsLayout;
