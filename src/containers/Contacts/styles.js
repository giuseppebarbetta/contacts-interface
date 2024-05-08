import styled from "styled-components";

export const Image = styled.img`
  height: 206px;
  margin-bottom: 26px;
  align-self: center;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 342px;
  height: 71px;
  border-radius: 14px;
  padding: 0 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: 0.3s;

    &:hover {
      transform: scale(1.17);
    }
  }
`;

export const Contact = styled.li`
  outline: none;
  border: none;
  width: 170px;
  list-style: none;

  p {
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 3px;
    opacity: 0.85;
  }

  h5 {
    font-size: 15px;
    font-weight: 700;
  }
`;
