import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

//marketplace data
const marketplaces = [
  {
    id: 1,
    name: "lacuisine",
    image: require("../../assets/images/commerce.jpg"),
    description: "A top-notch catering service providing delicious meals.",
  },
  {
    id: 2,
    name: "Bite & Smile",
    image: require("../../assets/images/commerce.jpg"),
    description: "your go-to place for the best food and drinks.",
  },
  {
    id: 3,
    name: "Anns kitchen",
    image: require("../../assets/images/commerce.jpg"),
    description: "Hot home-style cooking with a touch of excellence",
  },
  {
    id: 4,
    name: "Sir kayy",
    image: require("../../assets/images/commerce.jpg"),
    description: "A top-notch catering service providing delicious meals.",
  },
  {
    id: 5,
    name: "Tastee hot",
    image: require("../../assets/images/commerce.jpg"),
    description: "Spicy and delicious meal",
  },
];

export default function TransferScreen() {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (market: React.SetStateAction<null>) => {
    setSelectedMarket(market);
    setModalVisible(true);
  };

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/react-logo.png")} />
        <Title>Select Market Place</Title>
      </Header>

      <CurvedContainer>
        <DropdownIcon> ▼ </DropdownIcon>
      </CurvedContainer>

      <Grid>
        {marketplaces.map((market) => (
          <MarketButton key={market.id}>
            <MarketImage source={market.image}/>
          </MarketButton>

        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #0d2215;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
`;


//curve section
const CurvedContainer = styled.View`
width: 100%;
height: 80px;
background-color: black;
border-top-left-radius: 100px;
border-top-right-radius: 100px;
align-items: center;
justify-content: center;
`;

const DropdownIcon = styled.Text`
font-size: 24px;
color: #00ff00;
`;

//market place grid section
const Grid = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 10px;
padding: 20px;
width: 100%;
`;

const MarketButton = styled.TouchableOpacity`
width: 80px;
height: 80px;
border-radius: 10px;
`;

const MarketImage = styled.Image`
width: 80px;
height: 80px;
border-radius: 10px;
`;
