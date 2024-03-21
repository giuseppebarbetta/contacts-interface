import styled from 'styled-components';

export const Button = styled.button`
  background: rgba(217, 56, 86, 1);
  width: 342px;
  height: 68px;
  border: none;
  cursor: pointer;

  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
  text-align: center;

  margin-top: 35px;

  &:hover{
    opacity: .85;
  }

  ${props => props.isback && `
  background: rgba(255, 255, 255, 0.14);
`}
`;