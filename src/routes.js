import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";
import Main from "./pages/main";
import User from "./pages/user";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "LOGIN",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8400ffff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          title: "GitHub VIEWER",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8400ffff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="user"
        component={User}
        options={{
          title: "Perfil do Usuário",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8400ffff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
