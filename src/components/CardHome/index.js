import { Button, ButtonToolbar } from "rsuite";
import { CardHomeWrapper } from "./styled";

export const CardCitys = ({ url, nameCity }) => {
  return (
    <CardHomeWrapper url={url}>
      <span className="textNameCity">{nameCity}</span>
      <ButtonToolbar style={{ color: "#fff" }}>
        <Button
          appearance="ghost"
          style={{
            borderColor: "white",
            color: "white",
          }}
          size="lg"
        >
          Saiba Mais
        </Button>
      </ButtonToolbar>
    </CardHomeWrapper>
  );
};
