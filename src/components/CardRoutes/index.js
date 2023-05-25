import { Button, ButtonToolbar } from "rsuite";
import { CardRouteWrapper } from "./styled";

export const CardRoutes = ({
  url,
  nameCityOrigin,
  nameCityDestiny,
  descount,
}) => {
  return (
    <CardRouteWrapper url={url}>
      <div className="areaNames">
        <span className="textNameCityOrigin">De {nameCityOrigin} Para</span>
        <span className="textNameCityDestiny">{nameCityDestiny}</span>
      </div>
      <div className="valueTravel">R$ 240</div>
    </CardRouteWrapper>
  );
};
