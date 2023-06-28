import { styled } from "styled-components";

export const HomeTickets = styled.div`
  margin-bottom:0.8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-position: 0px;
  height: 10vh;
  width: 100%;
  font-size:18px;
`;

export const DivAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 5px 0px 0px;
`;

export const CardTickets = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: white;
border-radius: 10px;
width: 90%;
padding: 10px;
box-shadow: 5px 5px 5px;

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


