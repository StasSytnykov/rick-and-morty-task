import { ICharacter } from "../../utils/types";

interface Props {
  allCharacters: ICharacter[];
}

export const Episodes = ({ allCharacters }: Props) => (
  <table>
    <thead>
      <tr>
        <th>Character name</th>
        <th>Number of episodes</th>
      </tr>
    </thead>

    <tbody>
      {allCharacters.map(({ name, id, episode }) => {
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>
              {episode.map((item) => {
                const splitedEpisode = item.split("").splice(-2);
                const slashIndex = splitedEpisode.indexOf("/");

                if (slashIndex !== -1) {
                  splitedEpisode.splice(slashIndex, 1);
                }

                if (splitedEpisode.length > 1) {
                  return `${splitedEpisode.join("")}, `;
                }

                return `${splitedEpisode}, `;
              })}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
