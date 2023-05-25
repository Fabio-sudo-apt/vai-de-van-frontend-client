import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
