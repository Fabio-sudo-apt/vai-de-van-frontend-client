import { CardCitys } from "../../CardHome";
import { CardRoutes } from "../../CardRoutes";
import { Header } from "../../Header";
import { BodyCitys, HomeWrapper } from "./styled";

export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <div className="citys">
        <h3 style={{ margin: "1rem" }}>Destinos mais requisitados</h3>
        <BodyCitys>
          <CardCitys
            nameCity="Iguatu"
            url="https://consig.ce.gov.br/wp-content/uploads/elementor/thumbs/iguatu-pil6xjc0vi7zk6jte72z9era0cqit2d6tvzbmfe3gg.jpg"
          />
          <CardCitys
            nameCity="Fortaleza"
            url="https://fortaleza.ce.gov.br/images/images2/TURISMO/Beira-Mar%20Fco%20Fontenele.jpeg"
          />
          <CardCitys
            nameCity="Várzea Alegre"
            url="https://varzeaalegreagora.com/portal/wp-content/uploads/2018/08/Festa.png"
          />
          <CardCitys
            nameCity="Juazeiro do Norte"
            url="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3258788:1658497994/Juazeiro-do-Norte.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=413b8b5"
          />
        </BodyCitys>
      </div>
      <div className="citys">
        <h3 style={{ margin: "1rem" }}>Rotas com até 50% de desconto</h3>
        <BodyCitys>
          <CardRoutes
            nameCityOrigin="Caucaia"
            nameCityDestiny="Fortaleza"
            url="https://aprece.org.br/wp-content/uploads/2013/12/aprece-associacao-dos-municipios-do-estado-do-ceara_igreja-praca-da-matriz.jpg"
          />
          <CardRoutes
            nameCityOrigin="Fortaleza"
            nameCityDestiny="Iguatu"
            url="https://fortaleza.ce.gov.br/images/images2/TURISMO/Beira-Mar%20Fco%20Fontenele.jpeg"
          />
          <CardRoutes
            nameCityOrigin="Cedro"
            nameCityDestiny="Iguatu"
            url="https://www.cedro.ce.gov.br/fotos/1306/Capa1306.jpg"
          />
          <CardRoutes
            nameCityOrigin="Várzea Alegre"
            nameCityDestiny="Lavras da Mangabeira"
            url="https://i.ytimg.com/vi/gQzA4KxY_XQ/maxresdefault.jpg"
          />
        </BodyCitys>
      </div>
    </HomeWrapper>
  );
};
