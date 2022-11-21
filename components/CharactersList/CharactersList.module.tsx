import styled from "styled-components";

const CharactersListStyled = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  margin-top: 50px;
`;

const CharactersItemStyled = styled.li`
  border-radius: 10px;
  border: 1px solid gainsboro;
  overflow: hidden;

  cursor: pointer;
  transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out,
    border-radius 500ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;

const CharactersNameStyled = styled.p`
  text-align: center;
`;

const CharactersEndedText = styled.h2`
  text-align: center;
`;

export {
  CharactersListStyled,
  CharactersItemStyled,
  CharactersNameStyled,
  CharactersEndedText,
};
