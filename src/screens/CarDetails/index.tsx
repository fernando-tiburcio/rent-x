import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { navigate, goBack } = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigate("Scheduling", {
      car
    });
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Acessory
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
              key={accessory.type}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
