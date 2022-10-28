import styled from "styled-components";

const CharacterItemStyled = styled.div`
  display: flex;
  margin: 0 auto;

  width: 600px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #282c34;
`;

const CharacterItemTextThumb = styled.div`
  margin-left: 20px;
`;

const CharacterItemTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

const CharacterItemText = styled.p`
  color: white;
  font-size: 20px;
`;

const CharacterItemTextStatus = styled(CharacterItemText)`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;

    margin-right: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #10da18;
  }
`;

export {
  CharacterItemStyled,
  CharacterItemTextThumb,
  CharacterItemTitle,
  CharacterItemText,
  CharacterItemTextStatus,
};
