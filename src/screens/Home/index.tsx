import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from "./styles";

export function Home() {
  const carData = 
    {
      brand: "porsche",
      name: "Panamera",
      rent: {
        period: "Ao dia",
        price: 340,
      },
      thumbnail:
        "https://w7.pngwing.com/pngs/1014/228/png-transparent-2018-porsche-panamera-car-luxury-vehicle-porsche-911-porsche-compact-car-car-performance-car.png",
    };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5,6,7,8,9]}
        renderItem={({item}) => <Car data={carData} /> }
        keyExtractor={item => String(item)}
      />
    </Container>
  );
}
