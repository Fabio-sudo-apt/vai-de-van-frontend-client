import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 4%;
  width: 100%;
  background-color: white;

  .citys {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
`;

export const BodyCitys = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  @media (max-width: 368px) {
    flex-direction: column;
    height: auto;
  }
`;
