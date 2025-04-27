import React from "react";
import { View, Image, TextInput, Text } from "react-native";


const Tela_Inicio_App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('./imagens/logo_sao_luiz.jpg')
      } style={{
        width: 200,
        height: 200,
        margin: 'auto',
        marginTop: 290
      }}></Image>
    </View>
  );
};


const Login_Usuario = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>CPF:</Text>
      <TextInput
        placeholder="000-000-000-00"
        style={{
          height: 40,
          borderWidth: 1,
          padding: 10,
          margin: 'auto',
          marginTop: 490,
          marginLeft: 60
        }}>

      </TextInput>
    </View>

  );
};




const App = () => {
  return (
    <View>
      <Tela_Inicio_App></Tela_Inicio_App>;
      {/* <Login_Usuario></Login_Usuario>; */}
    </View>
  );

};


export default App;