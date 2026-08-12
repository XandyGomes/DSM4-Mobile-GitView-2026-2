import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChange={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChange={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },

  button: {
    backgroundColor: "#8400ffff",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText:{
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default Login;
