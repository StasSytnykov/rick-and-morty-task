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
  <div>
    <h2>{name}</h2>
    <img src={image} alt={"character"} />
    <p>{gender}</p>
    <p>{species}</p>
    <p>{status}</p>
  </div>
);
