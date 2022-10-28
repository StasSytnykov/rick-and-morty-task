import {
  CharacterItemStyled,
  CharacterItemTextThumb,
  CharacterItemTitle,
  CharacterItemText,
  CharacterItemTextStatus,
} from "./CharacterItem.styled";

interface Props {
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
}

export const CharacterItem = ({
  name,
  image,
  gender,
  species,
  status,
}: Props) => (
  <CharacterItemStyled>
    <img src={image} alt={"character"} />

    <CharacterItemTextThumb>
      <CharacterItemTitle>{name}</CharacterItemTitle>
      <CharacterItemTextStatus>
        {status} - {species}
      </CharacterItemTextStatus>
      <CharacterItemText>Gender: {gender}</CharacterItemText>
    </CharacterItemTextThumb>
  </CharacterItemStyled>
);
