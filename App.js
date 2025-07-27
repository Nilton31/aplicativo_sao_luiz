import React from 'react';
import { View, Image, TextInput, Text, ScrollView, Button, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

function ProdutoScreen({ navigation }) {
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
                    <Image source={require('./imagens/produtos/frutas/Maca.jpg')
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
                    <Image source={require('./imagens/produtos/frutas/Abacate1.jpg')
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
                    <Image source={require('./imagens/produtos/frutas/Caju.jpg')
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
                    <Image source={require('./imagens/produtos/frutas/Goiaba.jpg')
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
                    <Image source={require('./imagens/produtos/frutas/Limao.jpg')
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
                    <Image source={require('./imagens/produtos/frutas/abacaxi.jpg')
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
                    <Image source={require('./imagens/produtos/carnes/bife.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 1,99</Text>
                        <Text>
                            bife
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
                    <Image source={require('./imagens/produtos/carnes/bisteca_porco.png')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 3,49</Text>
                        <Text>
                            bisteca de porco
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
                    <Image source={require('./imagens/produtos/carnes/cx-mole.jpg')
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
                    <Image source={require('./imagens/produtos/carnes/file_de_peixe.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 7,99</Text>
                        <Text>
                            File de Peixe
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
                    <Image source={require('./imagens/produtos/carnes/frango.jpeg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 6,98</Text>
                        <Text>
                            frango
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
                    <Image source={require('./imagens/produtos/carnes/linguica_porco.jpg')
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
        </ScrollView >

    );
};

function CarrinhoScreen({ navigation }) {
    return (
        <ScrollView style={estilosProdutos.barra_rolagem}>
            <View style={{ flex: 1 }}>
                <Image source={require('./imagens/carrinho/carrinho.png')
                } style={{
                    width: 200,
                    height: 200,
                    marginTop: 20,
                    marginLeft: 90,
                    marginRight: 90,
                    margin: 'auto'
                }}></Image>
            </View>
        </ScrollView >

    );
};

function EntregaScreen({ navigation }) {
    return (
        <ScrollView style={estilosProdutos.barra_rolagem}>
            <View style={{ flex: 1 }}>
                <Image source={require('./imagens/entrega/entrega.png')
                } style={{
                    width: 200,
                    height: 200,
                    margin: 'auto',
                    marginLeft: 90,
                    marginRight: 90,
                    marginTop: 20
                }}></Image>
            </View>
        </ScrollView >
    );
};

function ConfiguracaoScreen({ navigation }) {
    return (
        <ScrollView style={estilosCadastrar.configuracao}>
            <View style={{ flex: 1 }}>
                <Image source={require('./imagens/login/img_login.png')
                } style={{
                    width: 100,
                    height: 100,
                    margin: 'auto',
                    marginTop: 20
                }}></Image>
            </View>
            <View style={estilosCadastrar.conteiner}>
                <View style={estilosCadastrar.conteiner_input}>
                    <Text style={estilosCadastrar.texto_algin}
                    >Usuário:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default">
                    </TextInput>
                    <Text style={estilosCadastrar.texto_algin}>Endereço:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default">
                    </TextInput>
                    <Text style={estilosCadastrar.texto_algin}>Número de Telefone:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="number-pad"
                        maxLength={11}>
                    </TextInput>
                    <Text style={estilosCadastrar.texto_algin}>Email:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="email-address">
                    </TextInput>
                    <Text style={estilosCadastrar.texto_algin}
                    >Nova Senha:
                    </Text>
                    <Text style={estilosCadastrar.texto_algin_senha}>a senha deve têm 8 caracteres alfanuméricos @nA90?</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="email-address">
                    </TextInput>
                    <Text style={estilosCadastrar.texto_algin}
                    >Confirma Senha:
                    </Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="email-address">
                    </TextInput>
                    <View style={estilosCadastrar.conteiner_botoes}>
                        <Button title="Cancelar" color={"red"}></Button>
                        <Button title="Salvar"></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Ofertas" component={ProdutoScreen} />
            <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
            <Tab.Screen name="Entrega" component={EntregaScreen} />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='São Luiz' component={MyTabs}></Drawer.Screen>
            <Drawer.Screen name='Configuracões' component={ConfiguracaoScreen}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default function AppMain() {
    return (
        <NavigationContainer>
            <MyDrawer></MyDrawer>
        </NavigationContainer>
    );

};