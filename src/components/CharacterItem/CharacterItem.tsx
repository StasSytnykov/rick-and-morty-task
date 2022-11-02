import {
  CharacterItemStyled,
  CharacterItemTextThumb,
  CharacterItemTitle,
  CharacterItemText,
  CharacterItemTextStatus,
} from "./CharacterItem.styled";
import { ICharacter } from "../../utils/types";

interface Props {
  selectedCharacter: ICharacter;
}

export const CharacterItem = ({ selectedCharacter }: Props) => (
  <CharacterItemStyled>
    <img
      src={selectedCharacter.image}
      alt={"character"}
      width={300}
      height={300}
    />

    <CharacterItemTextThumb>
      <CharacterItemTitle>{selectedCharacter.name}</CharacterItemTitle>
      <CharacterItemTextStatus props={selectedCharacter.status}>
        {selectedCharacter.status} - {selectedCharacter.species}
      </CharacterItemTextStatus>
      <CharacterItemText>Gender: {selectedCharacter.gender}</CharacterItemText>
    </CharacterItemTextThumb>
  </CharacterItemStyled>
);
