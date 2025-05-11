import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet, Text, ScrollView, Button, Alert } from "react-native";


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


const Entradar_Texto = () => {
  const [numero, setnumero] = useState();
  const [senha, setsenha] = useState()
  return (
    <View>
      <View style={styles.conteiner_text}>
        <Image source={require('./imagens/logo_sao_luiz.jpg')
        } style={styles.conteiner_logo}>
        </Image>
        <Text style={styles.texto_cpf}>CPF:</Text>
        <TextInput
          style={styles.meutextinput}
          value={numero}
          keyboardType="numeric"
          placeholder="000-000-000-00"
          maxLength={11}>
        </TextInput>
        <Text style={styles.texto_senha}>Senha:</Text>
        <TextInput
          style={styles.meutextinput}
          value={senha}
          keyboardType="numeric"
          placeholder="****"
          maxLength={4}>
        </TextInput>
        <View style={styles.conteiner_botoes}>
          <Button title="Cadastra"
            onPress={() => Alert.alert("Cadastrar")}></Button>
          <Button title="Entrar"
            onPress={() => Alert.alert("Entrar")}></Button>
        </View>
      </View>
    </View>
  );
};

const Cabecalho = () => {
  return (
    <View style={styles.cabeçalho}>
      <Text style={{ textAlign: "center" }}>ofertas</Text>
    </View>
  );
};

const Produtos = () => {
  return (
    <ScrollView style={styles.barra_rolagem}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View style={styles.col}>
          <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 90,
  },

  conteiner_logo: {
    width: 220,
    height: 220,
    margin: 'auto',
    marginTop: 20
  },

  conteiner_text: {
    marginHorizontal: 10,
    marginVertical: 90,
  },

  meutextinput: {
    marginTop: 25,
    height: 40,
    margin: 12,
    borderWidth: 1

  },
  texto_cpf: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
    fontSize: 15

  },

  texto_senha: {
    marginTop: 10,
    marginLeft: 10,
    padding: 5,
    fontSize: 15

  },

  conteiner_botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15
  },

  cabeçalho: {
    backgroundColor: "yellow",
    alignItems: "flex-start",
    borderWidth: 1,
    height: 20,
    marginTop: 40,
    position: "static"
  },

  barra_rolagem: {
    borderWidth: 1
  },

  row: {
    flexDirection: "row"
  },

  col: {
    flexDirection: "column",
    borderWidth: 18,
    padding: 15
  }
});


const App_Main = () => {
  return (
    <View>
      {/* <Cabecalho></Cabecalho>
      <Produtos></Produtos> */}
      {/* <Tela_Inicio_App></Tela_Inicio_App>;
      <Login_Usuario></Login_Usuario>
      <Entradar_Texto></Entradar_Texto> */}
      {/* <Tela_Inicio_App></Tela_Inicio_App> */}
      <Entradar_Texto></Entradar_Texto>
    </View>
  );

};


export default App_Main;