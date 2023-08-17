import { styled } from "styled-components";

export const HomeSearchTop = styled.div`
  color: #fff;
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


export const AllTickets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f4f6;
  border-radius: 10px;
  width: 98%;
  box-shadow: 5px 5px 5px;
`;

export const ContainerTickets = styled.div`
margin-top: 1.5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;