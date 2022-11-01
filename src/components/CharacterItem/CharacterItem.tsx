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
    <img src={selectedCharacter.image} alt={"character"} />

    <CharacterItemTextThumb>
      <CharacterItemTitle>{selectedCharacter.name}</CharacterItemTitle>
      <CharacterItemTextStatus props={selectedCharacter.status}>
        {selectedCharacter.status} - {selectedCharacter.species}
      </CharacterItemTextStatus>
      <CharacterItemText>Gender: {selectedCharacter.gender}</CharacterItemText>
    </CharacterItemTextThumb>
  </CharacterItemStyled>
);
