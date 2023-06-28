import { ButtonToolbar, DatePicker, IconButton, Stack } from "rsuite";
import { SelectSuggestion } from "../DefaultSuggestion";
import { HomeSearchInto, HomeSearchTop, HomeSearchWrapper } from "./styled";
import SearchIcon from "@rsuite/icons/Search";
import Logo from "../../assets/logo-horizontal.png";
import React, { useEffect, useState } from "react";
import CityService from "../../services/city";
const HomeSearch = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    CityService.getCities().then((res) => {
      setCities(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <HomeSearchWrapper>
      <HomeSearchTop>
        <img src={Logo} width="200px" draggable="false" />
      </HomeSearchTop>
      <HomeSearchInto>
        <div className="titleHomeSeach">
          <h2>PASSAGENS INTER MUNICIPAIS</h2>
        </div>
        <div className="formSearch">
          <SelectSuggestion
            label={"De"}
            placeholder={"Selecione a Origem"}
            data={cities}
          />
          <SelectSuggestion
            label={"Para"}
            placeholder={"Seleciona o Destino"}
            data={cities}
          />
          <SelectSuggestion
            label={<i class="fa-solid fa-car-bus"></i>}
            placeholder={"Seleciona o Tipo de veiculo"}
            data={[
              { name: "Ônibus", id: 1 },
              { name: "Van", id: 2 },
              { name: "Micro-ônibus", id: 3 },
            ]}
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
