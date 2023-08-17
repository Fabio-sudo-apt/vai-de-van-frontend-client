import { styled } from "styled-components";

export const HomeSearchWrapper = styled.div`
  @media (max-width: 768px) {
    background-image: none;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-image: url(https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80);
  background-size: 100%;
  background-position: 0px;
  height: 85vh;
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
  justify-content: space-evenly;
  background-color: white;
  border-radius: 10px;
  height: 80%;
  width: 40%;
  margin-left: 15px;

  .titleHomeSeach {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    h2 {
      font-size: 1.5rem;
    }
  }
  .formSearch {
    display: flex;
    flex-direction: column;
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

export const ContainerTickets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f4f6;
  border-radius: 10px;
  width: 80%;
  box-shadow: 5px 5px 5px;
`;

export const TicketWrapper = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-position: 0px;
  width: 100%;
`;

export const TitleHomeSeach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
