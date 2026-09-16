import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {Ionicons} from "@expo/vector-icons" 
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "./pages/login";
import Main from "./pages/main";
import User from "./pages/user";
import Cadastro from "./pages/cadastro";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerLeft: null,
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
        options={({navigation})=> ({
          headerLeft: null,
          title: "GitHub VIEWER",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8400ffff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#fff"
              style={{marginRight: 15}}
              onPress={async () => {
                try{
                  await AsyncStorage.removeItem("userToken")
                  navigation.replace("login")
                }catch (error){
                  console.error("Erro ao realizar o logout:", error)
                }
              }}
            />
          )
        })}
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
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          title: "Cadastro de Usuário",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8400ffff",
          },
          headerTitleStyle:  {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
