import styled from "styled-components";

export const Button = styled.button`
  background: rgba(217, 56, 86, 1);
  width: 342px;
  height: 68px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 900;
  line-height: 3px;
  text-align: center;

  margin-top: 17px;
  transition: 0.5s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid #ffffff;
    color: rgba(217, 56, 86, 1);
  }

  ${(props) =>
    props.isback &&
    `
  background: rgba(255, 255, 255, 0.14);

  &:hover {
    background: rgba(217, 56, 86, 1);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`}

  ${(props) =>
    props.goto &&
    `
  background: rgba(255, 255, 255, 0.14);

  &:hover {
    background: rgba(217, 56, 86, 1);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`}
`;
