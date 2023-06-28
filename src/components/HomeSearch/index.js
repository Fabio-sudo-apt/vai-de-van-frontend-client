import * as React from "react";
import { SelectSuggestion } from "../DefaultSuggestion";
import {
  HomeSearchInto,
  HomeSearchTop,
  HomeSearchWrapper,
  DivForm,
  ContainerTickets,
  TicketWrapper,
  divBotao,
} from "./styled";
import { CardViagens } from "../CardViagens";
import Logo from "../../assets/logo-horizontal.png";
import { DatePicker, Stack } from "rsuite";
import { UilMultiply } from "@iconscout/react-unicons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import createAxios from "../services/createAxios";

const HomeSearch = () => {
  const [viagens, setViagens] = useState([]);
  const [travel, setTravel] = useState({
    origem: "",
    destino: "",
  });
  const valorInput = (e) => {
    setTravel({ ...travel, [e.target.name]: e.target.value });
  };

  const Carregar = async (e) => {
    e.preventDefault();
    setViagens([]);

    console.log("Origem: " + travel.origem);
    console.log("destino: " + travel.destino);
    const listViagens = [];

    const viagem = await createAxios
      .get()
      .then((response) => response.data)
      .catch((err) => console.log(err));

    for (let i = 0; i <= viagem.length - 1; i++) {
      if (
        travel.origem === viagem[i].nome &&
        travel.destino === viagem[i].destino
      ) {
        listViagens.push(viagem[i]);
      }
    }
    setViagens([...viagens, ...listViagens]);
  };
  const resetState = () => {
    setViagens([]);
  };

  function verificaData() {
    let campo = document.getElementById("data").value;
    let partesCampo = campo.split("/");
    let dataCampo = new Date(
      partesCampo[2],
      partesCampo[1] - 1,
      partesCampo[0]
    );

    if (campo !== "") {
      if (new Date().setHours(0, 0, 0, 0) > dataCampo) {
        console.log("Não pode ter passagem");
        console.log("Data do campo" + dataCampo);
      } else {
        console.log("É para ter passagem");
        console.log("Data do campo" + dataCampo);
      }
    }
  }

  return (
    <div>
      <HomeSearchWrapper>
        <HomeSearchTop>
          <img src={Logo} width="200px" alt="description" />
        </HomeSearchTop>
        <HomeSearchInto>
          <div className="titleHomeSeach">
            <h2>PASSAGENS INTER MUNICIPAIS</h2>
          </div>

          <form onSubmit={Carregar}>
            <DivForm>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Origem
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  name="origem"
                  value={travel.origem}
                  onChange={valorInput}
                >
                  <MenuItem value="">
                    <em>Selecionar</em>
                  </MenuItem>
                  <MenuItem value={"Cedro"}>Cedro</MenuItem>
                  <MenuItem value={"Icó"}>Icó</MenuItem>
                  <MenuItem value={"Varzea Alegre"}>Varzea Alegre</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Destino
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  name="destino"
                  value={travel.destino}
                  onChange={valorInput}
                >
                  <MenuItem value="">
                    <em>Selecionar</em>
                  </MenuItem>
                  <MenuItem value={"Cedro"}>Cedro</MenuItem>
                  <MenuItem value={"Icó"}>Icó</MenuItem>
                  <MenuItem value={"Varzea Alegre"}>Varzea Alegre</MenuItem>
                </Select>
              </FormControl>
              <Stack
                direction="column"
                alignItems="flex-start"
                spacing={6}
                style={{ marginLeft: 5 }}
              >
                <DatePicker
                  id="data"
                  size="lg"
                  format="dd/MM/yyyy"
                  placeholder="Data da Viagem"
                  onChange={verificaData}
                />
              </Stack>
              <button type="submit" onClick={() => resetState()}>
                Enviar
              </button>
            </DivForm>
          </form>
        </HomeSearchInto>
      </HomeSearchWrapper>

      <TicketWrapper>
        <ContainerTickets>
          <divBotao>
            <UilMultiply onClick={resetState} />
          </divBotao>
          {viagens?.map((viag) => {
            return <CardViagens viagens={viag} />;
          })}
        </ContainerTickets>
      </TicketWrapper>
    </div>
  );
};

export default HomeSearch;
