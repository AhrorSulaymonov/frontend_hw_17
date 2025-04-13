import React from "react";
import {
  SectionCatalog,
  DiscountWrapper,
  CatalogContainer,
  Header,
  Title,
  ViewAllButton,
  Grid,
  Card,
  CardTextContent,
  CardTitle,
  CardPrice,
  CardImageWrapper,
  CardImage,
} from "./Main.style";
import { ArrowIcon } from "../../assets/icons";

const catalogItems = [
  {
    id: 1,
    title: "Люстры",
    price: "540Р",
    image: "/catalog/cat1.png",
  },
  { id: 2, title: "Светильники", price: "540Р", image: "/catalog/cat2.png" },
  { id: 3, title: "Бра", price: "540Р", image: "/catalog/cat3.png" },
  { id: 4, title: "Торшеры", price: "540Р", image: "/catalog/cat4.png" },
  {
    id: 5,
    title: "Настольные лампы",
    price: "540Р",
    image: "/catalog/cat5.png",
  },
  { id: 6, title: "Споты", price: "540Р", image: "/catalog/cat6.png" },
];

function MainPage(props) {
  return (
    <>
      <DiscountWrapper>
        <div>
          Скидка 15% <br /> на все подвесные
          <br /> светильники
          <br /> <span>до 5 февраля</span>
        </div>
        <img src="/catalog/discount.png" alt="" />
      </DiscountWrapper>
      <SectionCatalog>
        <CatalogContainer>
          {/* Yuqori qism */}
          <Header>
            <Title>Каталог</Title>
            <ViewAllButton>
              Весь каталог <ArrowIcon />{" "}
              {/* Ikonka propsiz qo'shiladi, stil styled-componentdan keladi */}
            </ViewAllButton>
          </Header>

          {/* Asosiy qism: Kartochkalar gridi */}
          <Grid>
            {catalogItems.map((item) => (
              <Card key={item.id}>
                {/* Kartochka ichidagi matn */}
                <CardTextContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardPrice>
                    От {item.price} <ArrowIcon /> {/* Ikonka */}
                  </CardPrice>
                </CardTextContent>

                {/* Rasm */}
                <CardImageWrapper>
                  <CardImage src={item.image} alt={item.title} loading="lazy" />
                </CardImageWrapper>
              </Card>
            ))}
          </Grid>
        </CatalogContainer>
      </SectionCatalog>
    </>
  );
}

export default MainPage;
