import React from 'react';
import { View, Image, TextInput, Text, ScrollView, Button, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import estilosCadastrar from './estilos/componentes/estilosCadastrar.js';
import estilosLogin from './estilos/componentes/estilosLogin.js';
import estilosProdutos from './estilos/componentes/estilosProdutos.js';



// const Tela_Inicio_App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <Image source={require('./imagens/logo_sao_luiz.jpg')
//       } style={{
//         width: 200,
//         height: 200,
//         margin: 'auto',
//         marginTop: 290
//       }}></Image>
//     </View>
//   );
// };

// function Login (){
//   return (
//     <View style={{backgroundColor: 'red'}}>
//     <NavigationContainer>
//       <Stack.Navigator> 
//         <Stack.Screen name="Entrar" component={EntradarTexto}>
//         </Stack.Screen>
//         <Stack.Screen name="Cadastrar" component={Cadastra}>
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// }

// export default Login;

// function Entradar_Texto() {
//     //   const [numero, setnumero] = useState();
//     //   const [senha, setsenha] = useState();
//     const navigation = useNavigation();
//     return (
//         <View>
//             <View style={estilosLogin.conteiner_text}>
//                 <Image source={require('./imagens/logo_sao_luiz.jpg')
//                 } style={estilosLogin.conteiner_logo}>
//                 </Image>
//                 <Text style={estilosLogin.texto_cpf}>CPF:</Text>
//                 <TextInput
//                     style={estilosLogin.meutextinput}
//                     keyboardType="numeric"
//                     placeholder="000-000-000-00"
//                     maxLength={11}>
//                 </TextInput>
//                 <Text style={estilosLogin.texto_senha}>Senha:</Text>
//                 <TextInput
//                     style={estilosLogin.meutextinput}
//                     keyboardType="numeric"
//                     placeholder="****"
//                     maxLength={4}>
//                 </TextInput>
//                 <View style={estilosLogin.conteiner_botoes}>
//                     {/* <Button title="Cadastrar"
//                         onPress={() => navigation.navigate('Cadastrar')}></Button> */}
//                     <Button title='Entrar' styles={estilosProdutos.conteiner_botoes} onPress={() => navigation.navigate('Produtos')}>
//                     </Button>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const Cadastrar = () => {
//     return (
//         <ScrollView>
//             <View style={estilosCadastrar.conteiner}>
//                 <Image source={require('./imagens/logo_sao_luiz.jpg')
//                 } style={estilosCadastrar.conteiner_logo}>
//                 </Image>
//                 <View style={estilosCadastrar.conteiner_input}>
//                     <Text style={estilosCadastrar.title_h1}> Faça o Seu Cadastro Aqui</Text>
//                     <Text style={estilosCadastrar.texto_algin}>CPF:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="numeric"
//                         placeholder="****"
//                         maxLength={12}></TextInput>
//                     <Text style={estilosCadastrar.texto_algin}
//                     >Nome Completo:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="default">
//                     </TextInput>
//                     <Text style={estilosCadastrar.texto_algin}
//                     >Data de Nascimento:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="numeric"
//                         placeholder="dd/mm/aaaa"
//                     ></TextInput>
//                     <Text style={estilosCadastrar.texto_algin}>Endereço:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="default">
//                     </TextInput>
//                     <Text style={estilosCadastrar.texto_algin}>Número de Telefone:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="number-pad"
//                         maxLength={11}>
//                     </TextInput>
//                     <Text style={estilosCadastrar.texto_algin}>Email:</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="email-address">
//                     </TextInput>
//                     <Text style={estilosCadastrar.texto_algin}
//                     >Senha:
//                     </Text>
//                     <Text style={estilosCadastrar.texto_algin_senha}>a senha deve têm 8 caracteres alfanuméricos entre @nA90?</Text>
//                     <TextInput
//                         style={estilosCadastrar.meutextinput}
//                         keyboardType="email-address">
//                     </TextInput>
//                     <View style={estilosCadastrar.conteiner_botoes}>
//                         <Button title="Finalizar"></Button>
//                         <Button title="Voltar" color={"red"}></Button>
//                     </View>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };

// const Cabecalho = () => {
//   return (
//     <View style={styles.cabeçalho}>
//       <Text style={{ textAlign: "center" }}>ofertas</Text>
//     </View>
//   );
// };

const ProdutoScreen = () => {
    // const navigation = useNavigation();
    return (
        <ScrollView style={estilosProdutos.barra_rolagem}>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/toddynho.jpeg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 1,99</Text>
                        <Text>
                            toddynho
                        </Text>
                        <Text>Bebida Láctea UHT</Text>
                        <Text>Chocolate Toddynho Caixa</Text>
                        <Text>200ml</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button title='adicionar'>
                    </Button>
                    </View>

                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/nescau.jpeg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 3,49</Text>
                        <Text>
                            Nescau
                        </Text>
                        <Text>Bebida Láctea UHT</Text>
                        <Text>Chocolate Nescau Caixa</Text>
                        <Text>180ml</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button title='adicionar'>
                    </Button>
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/iogurte_parcialmente_desnatado_morango_itambe.jpeg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 3,99</Text>
                        <Text>
                            Itambé
                        </Text>
                        <Text>Iogurte Parcilamente</Text>
                        <Text>Desnatado Morango</Text>
                        <Text>Itambé Frasco 170g</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button title='adicionar'>
                    </Button>
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/iogurte_ninho_morango.png')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 7,99</Text>
                        <Text>
                            Nestlé
                        </Text>
                        <Text>Iogurte Parcialmente</Text>
                        <Text>Desnatado Morango</Text>
                        <Text>Salada de Frutas</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button title='adicionar'>
                    </Button>
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/iogurte_nestle_greco.png')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 6,98</Text>
                        <Text>
                            Nestlé
                        </Text>
                        <Text>Iogurte Parcilamente</Text>
                        <Text>Desnatado Grego</Text>
                        <Text>Maracujá + Morango</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button title='adicionar'>
                    </Button>
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/iogurtes/iogurte_danone_morango.png')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 12,22</Text>
                        <Text>
                            Danone
                        </Text>
                        <Text>Iogurte de</Text>
                        <Text>Morango</Text>
                        <Text>Bebida</Text>
                        <Text>850g</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar_danone}><Button title='adicionar'>
                    </Button>
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
                <View style={estilosProdutos.col}>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
                <View style={estilosProdutos.col}>
                    <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
            </View>
            {/* <Button styles={estilosProdutos.conteiner_botoes} title='Voltar' onPress={() => navigation.navigate('Produtos')}>
            </Button> */}
        </ScrollView >

    );
};

// const Stack = createNativeStackNavigator();

// function RootStack() {
//     return (
//         <>
//             <Stack.Navigator initialRouteName="Entradar_Texto">
//                 <Stack.Screen name="Entradar_Texto" component={Entradar_Texto} />
//                 <Stack.Screen name="Produtos" component={ProdutoScreen} />
//             </Stack.Navigator>
//         </>
//     );
// }



const AppMain = () => {
    return (
        <ProdutoScreen></ProdutoScreen>
        // <View>
        //     <NavigationContainer>
        //         <RootStack />
        //     </NavigationContainer>
        // </View>
    )
};

export default AppMain;

// export default function AppMain() {
//     return (
//         <>
//             <NavigationContainer>
//                 <RootStack />
//             </NavigationContainer>
//         </>
//     );

// };
// return (
//     <View>
//         <Entradar_Texto></Entradar_Texto>
//         {/* <Login></Login> */}
//         {/* <Cabecalho></Cabecalho>
//   <Produtos></Produtos> */}
//         {/* <Tela_Inicio_App></Tela_Inicio_App>;
//   <Login_Usuario></Login_Usuario>
//   {/* <Tela_Inicio_App></Tela_Inicio_App> */}
//         {/* <Entradar_Texto></Entradar_Texto> */}
//         {/* <Cadastrar></Cadastrar> */}
//     </View>
// );