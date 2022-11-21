import Link from "next/link";
import { NavLinkThumb, NavLinkTextThumb } from "./Statistics.styled";
import { useRouter } from "next/router";

export const Statistics = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <NavLinkThumb>
        <NavLinkTextThumb>
          <Link
            href={"/statistics/episodes"}
            style={
              path === "/statistics/episodes"
                ? { color: "rgb(218, 75, 12)" }
                : { color: "black" }
            }
          >
            Episodes
          </Link>
        </NavLinkTextThumb>
        <NavLinkTextThumb>
          <Link
            href={"/statistics/location"}
            style={
              path === "/statistics/location"
                ? { color: "rgb(218, 75, 12)" }
                : { color: "black" }
            }
          >
            Location
          </Link>
        </NavLinkTextThumb>
      </NavLinkThumb>
    </>
  );
};
