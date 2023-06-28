import { styled } from "styled-components";

export const CardRouteWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.16152398459383754) 100%
    ),
    url(${(props) => props.url});
  background-size: cover;
  width: 20rem;
  height: 20rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s;
  text-align: le;

  @media (max-width: 368px) {
    flex-direction: column;
    width: 90%;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: "-30%";
    position: absolute;
    background-color: #fff;
    color: red;
    top: -10px;
    width: 40%;
    height: 30px;
    text-align: center;
    font-weight: 900;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .areaNames {
    width: 100%;
    padding: 1rem;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: baseline;
  }
  .textNameCityOrigin {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: left;
    margin: 0 !important;
  }

  .textNameCityDestiny {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;
    margin: 0 !important;

    @media (max-width: 368px) {
      flex-direction: column;
      width: 60%;
      font-size: 1.6rem;
    }
  }

  .valueTravel {
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 20%;
    background-color: #fff;
    font-size: 2.4rem;
    color: #4caf50;
    align-items: center;
    font-weight: 900;

    @media (max-width: 368px) {
      flex-direction: column;
      width: 60%;
      font-size: 1.4rem;
    }
  }
`;
