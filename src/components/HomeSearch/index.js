import * as React from "react";
import { SelectSuggestion } from "../DefaultSuggestion";
import { Button } from "rsuite";
import {
  HomeSearchInto,
  HomeSearchWrapper,
  DivForm,
  TitleHomeSeach,
  HomeSearchTop,
  Form,
} from "./styled";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-horizontal.png";
import { DatePicker, Stack } from "rsuite";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const HomeSearch = (Tenta) => {
  const navigate = useNavigate();
  const [travel, setTravel] = useState({
    origem: "",
    destino: "",
  });
  //captura o valor origem e destino
  const valorInput = (e) => {
    setTravel({ ...travel, [e.target.name]: e.target.value });
  };
  //busca no json as passagens com a mesma origem e destino
  const Carregar = (e) => {
    e.preventDefault();
    navigate("/teste", { replace: true, state: { travel } });
  };

  //verifica se a data é anterior a data de hoje
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
      <HomeSearchTop>
        <img src={Logo} width="200px" alt="description" />
      </HomeSearchTop>
      <HomeSearchWrapper>
        <HomeSearchInto>
          <Form onSubmit={Carregar}>
            <DivForm>
              <FormControl
                variant="filled"
                sx={{ m: 1, width: 250, borderRadius: 18, border: 0 }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  De onde você está saindo?
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
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
              <FormControl
                variant="filled"
                sx={{ m: 1, width: 250, borderRadius: 18, border: 0 }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Para onde você vai?
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
              <FormControl variant="filled" sx={{ m: 1, width: 250 }}>
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
              </FormControl>
              <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#ff5722",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#e64a19",
                    },
                  }}
                  type="submit"
                >
                  Busca passagem
                </Button>
              </FormControl>
            </DivForm>
          </Form>
        </HomeSearchInto>
      </HomeSearchWrapper>
    </div>
  );
};

export default HomeSearch;
