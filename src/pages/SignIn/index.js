import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import api from "../../services/api";

import {
  Box,
  Title,
  Text,
  Spacer,
  Button,
  Input,
  Touchable,
} from "../../components";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const requestLogin = async () => {
    try {
      const { data: users } = await api.post("/users", {
        params: {
          email: user.email,
          password: user.password,
        },
      });

      if (user.email?.length === 0 || user.password?.length === 0) {
        alert("Fill all field");
        return false;
      }

      const [loggedUser] = users;
      if (!loggedUser) {
        alert("user not found");
        return false;
      }
      console.log(loggedUser);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      <Box background="light" align="center" justify="center" hasPadding>
        <Spacer size="60px" />
        <Title weight="900" variant="homeTitle" bold color="dark">
          LOOKAPP
        </Title>
        <Spacer size="60px" />

        <Text weight="600" variant="homeTitle" color="dark">
          SignIn my account.
        </Text>
        <Spacer size="25px" />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          value={user.email}
          onChangeText={(email) =>
            setUser({
              ...user,
              email,
            })
          }
        />

        <Spacer size="20px" />

        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) =>
            setUser({
              ...user,
              password,
            })
          }
        />
        <Spacer size="40px" />

        <Button
          onPress={() => requestLogin()}
          spacing="0px 0px 30px 0px"
          block
          background="danger"
        >
          <Text color="light"> SignIn into my account</Text>
        </Button>

        <Touchable height="30px" onPress={() => navigation.navigate("SignUp")}>
          <Text underline>Create new account</Text>
        </Touchable>
      </Box>
    </>
  );
};

export default SignUp;
