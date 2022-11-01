import { ICharacter } from "../../utils/types";

interface Props {
  sortedCharacters: ICharacter[];
  handleSortedCharactersByNumberOfSeries: () => void;
  handleSortedCharactersByName: () => void;
}

export const Episodes = ({
  sortedCharacters,
  handleSortedCharactersByNumberOfSeries,
  handleSortedCharactersByName,
}: Props) => (
  <table>
    <thead>
      <tr>
        <th onClick={handleSortedCharactersByName}>Character name</th>
        <th onClick={handleSortedCharactersByNumberOfSeries}>
          Number of episodes
        </th>
      </tr>
    </thead>

    <tbody>
      {sortedCharacters.map(({ name, id, episode }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{episode.length}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
