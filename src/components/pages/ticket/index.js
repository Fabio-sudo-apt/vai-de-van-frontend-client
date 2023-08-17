import * as React from "react";
import {
  DivForm,
  ContainerTickets,
  AllTickets,
  HomeSearchTop,
} from "./styled";
import Logo from "../../../assets/logo-horizontal.png";
import createAxios from "../../services/createAxios"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardViagens } from "../../CardViagens";
import { Button } from 'rsuite';
import { DatePicker, Stack } from "rsuite";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export const Tickets = () => {
  const location = useLocation();
  const [travel, setTravel] = useState({
    origem: "",
    destino: "",
  });
  const [viagens, setViagens] = useState([]);


  const resetState = () => {
    setViagens([]);
  };

  const valorInput = (e) => {
    setTravel({ ...travel, [e.target.name]: e.target.value });
  };



  const Carregar = async (e) => {
    e.preventDefault();
    setViagens([]);
    resetState();
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



  const CarregarPrimeiraVez = async () => {
    const listViagens = [];

    const viagem = await createAxios
      .get()
      .then((response) => response.data)
      .catch((err) => console.log(err));

    for (let i = 0; i <= viagem.length - 1; i++) {
      if (
        location.state.travel.origem === viagem[i].nome &&
        location.state.travel.destino === viagem[i].destino
      ) {
        listViagens.push(viagem[i]);
      }
    }
    setViagens([...viagens, ...listViagens]);
  }

  React.useEffect(() => {
    CarregarPrimeiraVez();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      <HomeSearchTop>
        <img src={Logo} width="200px" alt="description" />

        
          <DivForm>
          <form onSubmit={Carregar}>
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
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
                />
              </Stack>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Button appearance="default" active type="submit" onClick={() => resetState()}>
                Enviar
              </Button>
            </FormControl>
            </form>
          </DivForm>

      </HomeSearchTop>


      <ContainerTickets>
        <AllTickets>
          {viagens?.map((viag) => {
            return <CardViagens viagens={viag} />;
          })}
        </AllTickets>
      </ContainerTickets>

    </div>
  );
};







