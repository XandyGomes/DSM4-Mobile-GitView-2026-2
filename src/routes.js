import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";

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
        {/* <Stack.Screen />
            <Stack.Screen /> */}
      </Stack.Navigator>
  );
}
