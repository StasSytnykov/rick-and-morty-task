import styled from "styled-components";

type TextStatusProps = {
  props: string;
};

const CharacterItemStyled = styled.div`
  display: flex;
  margin: 100px auto 0 auto;

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

const CharacterItemTextStatus = styled(CharacterItemText)<TextStatusProps>`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;

    margin-right: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) =>
      (props.props === "unknown" && "grey") ||
      (props.props === "Alive" && "#0ac512") ||
      (props.props === "Dead" && "#f00a0a")};
  }
`;

export {
  CharacterItemStyled,
  CharacterItemTextThumb,
  CharacterItemTitle,
  CharacterItemText,
  CharacterItemTextStatus,
};
