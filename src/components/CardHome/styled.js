import { styled } from "styled-components";

export const CardHomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.16152398459383754) 100%
    ),
    url(${(props) => props.url});
  background-size: cover;
  width: 20rem;
  height: 25rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s;
  max-width: 90%;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .textNameCity {
    color: #fff;
    font-size: 2.3rem;
    font-weight: 700;
    text-align: center;
  }
`;
