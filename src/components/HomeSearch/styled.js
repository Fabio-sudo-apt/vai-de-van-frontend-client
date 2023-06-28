import { styled } from "styled-components";

export const HomeSearchWrapper = styled.div`
  @media (max-width: 768px) {
    background-image: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://cdn.wallpapersafari.com/16/32/AsS1PB.jpg);
  background-size: 100%;
  background-position: 0px;
  height: 60vh;
  width: 100%;
`;

export const HomeSearchTop = styled.div`
  color: #fff;
  position: fixed;
  z-index: 999;
  padding-left: 30px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: 10%;
  width: 100%;
`;

export const HomeSearchInto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  height: 30%;
  width: 80%;

  .titleHomeSeach {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 40%;

    h2 {
      font-size: 1.5rem;
    }
  }
  .formSearch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 60%;
  }
  @media (max-width: 768px) {
    .formSearch {
      flex-direction: column;
    }

    .titleHomeSeach {
      margin-bottom: 3rem;
      text-align: center;
    }

    align-items: center;
    justify-content: center;
  }
`;
