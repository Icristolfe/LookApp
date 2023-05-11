import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { colors } from "../../styles/theme.json";

import { Title, Text, Button, Box, Spacer, Touchable } from "../../components";

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar style="auto" />
      <Box background="dark" align="center">
        <Box justify="center" align="center">
          <Title color="light" weight="900" variant="homeTitle" TitleTopMargin>
            LOOKAPP
          </Title>

          <Text spacing="15px 0px 0px 0px" align="center">
            Stay on top of the fashion world {"\n"}
            and buy you favorite looks
          </Text>
        </Box>

        <Box fluid justify="flex-end" hasPadding align="center">
          <Button
            onPress={() => navigation.navigate("SignIn")}
            spacing="0px 0px 30px 0px"
            block
            background="danger"
          >
            <Text color="light">SignIn my account</Text>
          </Button>

          <Touchable
            height="30px"
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text underline color="light">
              Create new account
            </Text>
          </Touchable>
          <Spacer size="100px" />
        </Box>
      </Box>
    </>
  );
};

export default Home;
