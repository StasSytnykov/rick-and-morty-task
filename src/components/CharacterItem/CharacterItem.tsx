import { ICharacter } from "../../utils/types";

interface Props {
  selectedCharacter: ICharacter;
}

export const CharacterItem = ({ selectedCharacter }: Props) => (
  <div>
    <h2>{selectedCharacter.name}</h2>
    <img
      src={selectedCharacter.image}
      alt={"character"}
      width={300}
      height={300}
    />
    <p>{selectedCharacter.gender}</p>
    <p>{selectedCharacter.species}</p>
    <p>{selectedCharacter.status}</p>
  </div>
);
