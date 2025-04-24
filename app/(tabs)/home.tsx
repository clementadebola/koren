import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import ProfilePic from "../../assets/images/profile.png";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

  return (
    <Container>
      <Header>
        <View>
          <WelcomeText>Welcome back</WelcomeText>
          <Text style={{ color: "white" }}>Animasun</Text>
          <Text style={{ color: "white" }}>🌟 Priority</Text>
        </View>
        {/* <ProfileImage source={{ uri: "https://via.placeholder.com/50" }} /> */}
        <ProfileImage source={ProfilePic} />
      </Header>

      <Card>
        <CardHeader>
          <BalanceText>$5,500.50</BalanceText>
          <BankLogo>
            <BankInitial>K</BankInitial>
          </BankLogo>
        </CardHeader>

        <CardFooter>
          <BankText>**** 123-456-7890</BankText>
          <BankText>Korensi Bank - Current</BankText>
        </CardFooter>
      </Card>

      <Actions>
        <ActionButton>
          <IconButton onPress={() => router.push("/pages/transfer")}>
            {" "}
            <Ionicons name="send" size={24} color="white" />
          </IconButton>

          <Text style={{ color: "white" }}>Transfer</Text>
        </ActionButton>
        
        <ActionButton>
          <IconButton onPress={() => router.push("/pages/request")}>
            <Ionicons name="cash" size={24} color="white" />
          </IconButton>

          <Text style={{ color: "white" }}>Request</Text>
        </ActionButton>
        <ActionButton>
          <IconButton>
            {" "}
            <Ionicons name="swap-horizontal" size={24} color="white" />
          </IconButton>

          <Text style={{ color: "white" }}>Swap</Text>
        </ActionButton>

        <ActionButton>
          <IconButton onPress={() => router.push("/pages/more")}>
            {" "}
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </IconButton>

          <Text style={{ color: "white" }}>More</Text>
        </ActionButton>
      </Actions>

      <TransactionsContainer>
        <SearchInput placeholder="search..." placeholderTextColor="#aaa" />
        <TransactionRow>
          <TransactionText>🍽 Fauget Cafe</TransactionText>
          <StatusText status="Success">Success</StatusText>
        </TransactionRow>
        <TransactionRow>
          <TransactionText>☕ Larana, Inc.</TransactionText>
          <StatusText status="Success">Success</StatusText>
        </TransactionRow>
        <TransactionRow>
          <TransactionText>👤 Claudia Alves</TransactionText>
          <StatusText status="Failed">Failed</StatusText>
        </TransactionRow>
        <TransactionRow>
          <TransactionText>🍽 Borcelle Cafe</TransactionText>
          <StatusText status="Success">Success</StatusText>
        </TransactionRow>
      </TransactionsContainer>
    </Container>
  );
}

// ✅ Styled Components for UI
const Container = styled(LinearGradient).attrs({
  colors: ["#0dcf85", "#070707FF"],
})`
  flex: 1;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const WelcomeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Card = styled.View`
  background: black;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
  backdrop-filter: blur(10px);
  height: 180px;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const BalanceText = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

const BankLogo = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background: white;
  justify-content: center;
  align-items: center;
`;

const BankInitial = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const BankText = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Actions = styled.View`
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  flex-direction: row;
  width: 100%;
  margin: auto;
`;

const ActionButton = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const IconButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: #1e1e1e;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const TransactionsContainer = styled(ScrollView)`
  background: black;
  border-radius: 15px;
  padding: 15px;
  margin-top: 20px;
`;
const SearchInput = styled.TextInput`
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  border: 0.5px solid grey;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TransactionText = styled.Text`
  color: white;
`;

const StatusText = styled.Text`
  color: ${(props) => (props.status === "Success" ? "green" : "red")};
`;
