import { CardTickets, HomeTickets, DivAlign } from "./styled";
import { UilMoneyBill } from '@iconscout/react-unicons'
import { UilLocationArrow } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilStopwatch } from '@iconscout/react-unicons'
import { UilPricetagAlt } from '@iconscout/react-unicons'
import { UilCalender } from '@iconscout/react-unicons'
import Button from '@mui/material/Button';
import React from "react";

export const CardViagens = (props) => {
  return (
    <HomeTickets>
      <CardTickets>
        <DivAlign>
          <UilLocationPoint size={15} />
          <span>{props.viagens?.nome}</span>
          <UilArrowRight size={15} />
          <span>{props.viagens?.destino}</span>
          <UilLocationArrow size={15} />
        </DivAlign>

        <DivAlign>
          <UilStopwatch size={20} />
          <span>15:00</span>
        </DivAlign>
        <DivAlign>
          <UilMoneyBill size={20} />
          <span>R$ 10,50</span>
        </DivAlign>
        <DivAlign>
        <UilCalender/>
        <span>{props.viagens?.data}</span>
        </DivAlign>
        <Button variant="contained" endIcon={<UilPricetagAlt />}>
          Reservar
        </Button>
      </CardTickets>
    </HomeTickets>
  );
};
