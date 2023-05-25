import { ButtonToolbar, DatePicker, IconButton, Stack } from "rsuite";
import { SelectSuggestion } from "../DefaultSuggestion";
import { HomeSearchInto, HomeSearchTop, HomeSearchWrapper } from "./styled";
import SearchIcon from "@rsuite/icons/Search";
import Logo from "../../assets/logo-horizontal.png";
import React from "react";

const HomeSearch = () => {
  return (
    <HomeSearchWrapper>
      <HomeSearchTop>
        <img src={Logo} width="200px" />
      </HomeSearchTop>
      <HomeSearchInto>
        <div className="titleHomeSeach">
          <h2>PASSAGENS INTER MUNICIPAIS</h2>
        </div>
        <div className="formSearch">
          <SelectSuggestion label={"De"} placeholder={"Seleciono a Origem"} />
          <SelectSuggestion
            label={"Para"}
            placeholder={"Seleciona o Destino"}
          />
          <SelectSuggestion
            label={<i class="fa-solid fa-car-bus"></i>}
            placeholder={"Seleciona o Tipo de veiculo"}
          />
          <Stack
            direction="column"
            alignItems="flex-start"
            spacing={6}
            style={{ marginLeft: 5 }}
          >
            <DatePicker
              size="lg"
              format="dd-MM-yyyyy"
              placeholder="Data da Viagem"
            />
          </Stack>
          <ButtonToolbar style={{ paddingLeft: 5 }}>
            <IconButton
              size="lg"
              appearance="primary"
              color="green"
              icon={<SearchIcon />}
            >
              Buscar Passagens
            </IconButton>
          </ButtonToolbar>
        </div>
      </HomeSearchInto>
    </HomeSearchWrapper>
  );
};

export default HomeSearch;
