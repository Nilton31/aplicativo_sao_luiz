// Importa React e hooks para estado e efeito
import React, { useState } from 'react';
// Importa componentes visuais do React Native
import { View, Image, TextInput, Text, ScrollView, Button, Alert, Modal, StyleSheet } from "react-native";
// Importa navegação do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Importa estilos personalizados
import estilosCadastrar from './estilos/componentes/estilosCadastrar.js';
import estilosProdutos from './estilos/componentes/estilosProdutos.js';
import { useEffect } from 'react';
import estilosCarrinho from './estilos/componentes/estilosCarrinho.js';
// Importa biblioteca de ícones
import Ionicons from 'react-native-vector-icons/Ionicons';


// Tela inicial (Splash) exibida ao abrir o app
function Tela_Inicio_App({ navigation }) {
    useEffect(() => {
        // Aguarda 2 segundos e navega para a tela principal
        const timer = setTimeout(() => {
            navigation.replace('Principal');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('./imagens/logo mercadinho alcantara.png')}
                style={{
                    width: 200,
                    height: 200,
                    marginTop: 10
                }}
            />
        </View>
    );
}

// Stack Navigator para controlar a navegação inicial (Splash -> Principal)

const Stack = createNativeStackNavigator();

function RootNavigator(props) {
    return (
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={Tela_Inicio_App} />
            <Stack.Screen name="Principal">
                {() => <MyDrawer {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

// Tela de produtos, exibe lista de produtos e botão para adicionar ao carrinho
function ProdutoScreen({ adicionarProduto }) {
    // Estado para controlar modal e produto selecionado
    const [modalVisible, setModalVisible] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    // Função chamada ao clicar em "Adicionar"
    const handleAdicionar = (produto) => {
        setProdutoSelecionado(produto);
        setModalVisible(true); // Abre modal de confirmação
    };

    // Confirma adição do produto ao carrinho
    const confirmarAdicionar = () => {
        adicionarProduto(produtoSelecionado); // Adiciona ao carrinho
        setModalVisible(false); // Fecha modal
        setProdutoSelecionado(null); // Limpa seleção
        Alert.alert('Adicionado!', 'Produto adicionado ao carrinho.');
    };


    return (
        <ScrollView style={estilosProdutos.barra_rolagem}>
            {/* Exibe produtos em linhas e colunas */}
            {/* Cada produto tem botão "Adicionar" que abre modal */}
            {/* ...código dos produtos... */}
            {/* Modal de confirmação ao adicionar produto */}
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
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Toddynho', preco: 1.99 })}
                    />
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
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Nescau', preco: 3.49 })}
                    />
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
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Iogurte Parcilamente Desnatado Morango', preco: 3.99 })}
                    />
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
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Iogurte Ninho Morango', preco: 7.99 })}>
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
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'iogurte_nestle_greco', preco: 6.98 })}
                    />
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
                    <View style={estilosProdutos.botao_adicionar_danone}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Iogurte Danone Morango', preco: 12.22 })}
                    />
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
                            Maça
                        </Text>
                        <Text>Vermelha</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Maça', preco: 5.99 })}
                    />
                    </View>

                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/frutas/Abacate1.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 7,49</Text>
                        <Text>
                            Abacate
                        </Text>
                        <Text>1 unidade</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Abacate', preco: 7.49 })}
                    />
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/frutas/Caju.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 9,99</Text>
                        <Text>
                            Caju
                        </Text>
                        <Text>1 unidade</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Caju', preco: 9.99 })}
                    />
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/frutas/Goiaba.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 5,99</Text>
                        <Text>
                            Goiaba
                        </Text>
                        <Text>1 unidade</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Goiaba', preco: 5.99 })}
                    />
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/frutas/Limao.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 3,98</Text>
                        <Text>
                            Limão
                        </Text>
                        <Text>1 unidade</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Limão', preco: 3.98 })}
                    />
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/frutas/abacaxi.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 12,22</Text>
                        <Text>
                            abacaxi
                        </Text>
                        <Text> 1 unidade
                        </Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar_danone}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'Abacaxi', preco: 12.22 })}
                    />
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/carnes/bife.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 9,99</Text>
                        <Text>
                            bife
                        </Text>
                        <Text>de boi 1 kg</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'bife', preco: 9.99 })}
                    />
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/carnes/bisteca_porco.png')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 37,90</Text>
                        <Text>
                            bisteca de porco
                        </Text>
                        <Text>1 kg
                        </Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'bisteca de porco', preco: 37.90 })}
                    />
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/carnes/cx-mole.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 13,99</Text>
                        <Text>
                            coxão mole bovino
                        </Text>
                        <Text>1 kg</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'coxão mole bovino', preco: 13.99 })}
                    />
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
                        <Text>1 kg</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'file de peixe', preco: 7.99 })}
                    />
                    </View>
                </View>
            </View>
            <View style={estilosProdutos.row}>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/carnes/frango.jpeg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 16,98</Text>
                        <Text>
                            frango
                        </Text>
                        <Text>1 kg</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'frango', preco: 16.98 })}
                    />
                    </View>
                </View>
                <View style={estilosProdutos.col}>
                    <Image source={require('./imagens/produtos/carnes/linguica_porco.jpg')
                    } style={estilosProdutos.imagen_produto}>
                    </Image>
                    <View style={estilosProdutos.discricao_produto}>
                        <Text style={estilosProdutos.preco_produto}>R$ 12,22</Text>
                        <Text>
                            linguica Porco
                        </Text>
                        <Text>1 kg</Text>
                    </View>
                    <View style={estilosProdutos.botao_adicionar_danone}><Button
                        title="Adicionar"
                        onPress={() => handleAdicionar({ nome: 'linguica Porco', preco: 12.22 })}
                    />
                    </View>
                </View>
            </View>
            {/* Modal de confirmação */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {produtoSelecionado
                                ? `Adicionar ${produtoSelecionado.nome} ao carrinho?`
                                : 'Adicionar produto ao carrinho?'}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button title="Não" color="#FF0000" onPress={() => setModalVisible(false)} />
                            <View style={{ width: 20 }} />
                            <Button title="Sim" color="#008000" onPress={confirmarAdicionar} />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView >

    );
};

// Tela do carrinho de compras
function CarrinhoScreen({ carrinho, setCarrinho, comprasRealizadas, setComprasRealizadas }) {
    const [modalVisible, setModalVisible] = useState(false);

    // Define cor dos botões conforme há itens no carrinho
    const botaoCorComprar = carrinho.length > 0 ? "#008000" : "#808080";
    const botaoCorRemover = carrinho.length > 0 ? "#FF0000" : "#808080";

    // Função para remover um item do carrinho pelo índice
    const removerItem = (index) => {
        const novoCarrinho = carrinho.filter((_, idx) => idx !== index);
        setCarrinho(novoCarrinho);
    };

    // Confirma compra, transfere itens para compras realizadas e limpa carrinho
    const confirmarCompra = () => {
        setModalVisible(false);
        if (carrinho.length > 0) {
            setComprasRealizadas([...comprasRealizadas, ...carrinho]);
            setCarrinho([]);
            Alert.alert('Compra confirmada!', 'Agora confirme a entrega.');
        }
    };

    return (
        <ScrollView style={estilosCarrinho.barra_de_rolagem}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -90 }}>
                <Image
                    source={require('./imagens/carrinho/carrinho.png')}
                    style={{
                        width: 200,
                        height: 200,
                        marginLeft: -4
                    }}
                />
                <View style={[estilosCarrinho.conteiner_botoes, { flexDirection: 'row', justifyContent: 'center', marginLeft: 60 }]}>
                    <View style={{ marginRight: 20 }}>
                        <Button
                            title="R$ Comprar"
                            color={botaoCorComprar}
                            onPress={() => setModalVisible(true)}
                            disabled={carrinho.length === 0}
                        />
                    </View>
                </View>
                <View>
                    {carrinho.length === 0 && <Text style={estilosCarrinho.title_carrinho}>Nenhum item no carrinho</Text>}
                    {carrinho.map((item, idx) => (
                        <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <Text style={estilosCarrinho.title_carrinho}>{item.nome} - R$ {item.preco}</Text>
                            <Button
                                title="Remover"
                                color={botaoCorRemover}
                                onPress={() => removerItem(idx)}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* Modal de confirmação */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja confirmar a compra?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button title="Não" color="#FF0000" onPress={() => setModalVisible(false)} />
                            <View style={{ width: 20 }} />
                            <Button title="Sim" color="#008000" onPress={confirmarCompra} />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

// Tela de entrega dos produtos comprados
function EntregaScreen({ comprasRealizadas, setComprasRealizadas }) {
    const [modalVisible, setModalVisible] = useState(false);

    // Confirma entrega e limpa lista de compras realizadas
    const confirmarEntrega = () => {
        setModalVisible(false);
        Alert.alert('Entrega confirmada!', 'Obrigado por comprar conosco!');
        setComprasRealizadas([]); // Limpa os itens após confirmar
    };

    return (
        <ScrollView style={estilosCarrinho.barra_de_rolagem}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Image
                    source={require('./imagens/entrega/entrega.png')}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                <View>
                    {/* Lista de itens para entrega */}
                    {comprasRealizadas.length === 0 && <Text style={estilosCarrinho.title_carrinho}>Nenhum item para entrega</Text>}
                    {comprasRealizadas.map((item, idx) => (
                        <Text key={idx} style={estilosCarrinho.title_carrinho}>{item.nome} - R$ {item.preco}</Text>
                    ))}
                </View>
                {/* Botão para confirmar entrega */}
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Confirmar Entrega"
                        color="#4CAF50"
                        onPress={() => setModalVisible(true)}
                        disabled={comprasRealizadas.length === 0}
                    />
                </View>
            </View>
            {/* Modal de confirmação */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja confirmar a entrega?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button title="Não" color="#FF0000" onPress={() => setModalVisible(false)} />
                            <View style={{ width: 20 }} />
                            <Button title="Sim" color="#008000" onPress={confirmarEntrega} />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

// Tela de configuração do usuário
function ConfiguracaoScreen() {
    // Estados para os campos do formulário
    const [usuario, setUsuario] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    // Função para salvar configurações
    const salvarConfiguracoes = () => {
        Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
        console.log({ usuario, endereco, telefone, email, senha, confirmaSenha });
    };

    // Função para limpar todos os campos
    const cancelarConfiguracoes = () => {
        setUsuario('');
        setEndereco('');
        setTelefone('');
        setEmail('');
        setSenha('');
        setConfirmaSenha('');
        Alert.alert('Cancelado', 'Dados apagados!');
    };

    return (
        <ScrollView style={estilosCadastrar.configuracao}>
            <View style={{ flex: 1 }}>
                <Image source={require('./imagens/login/img_login.png')}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 'auto',
                        marginTop: 20
                    }} />
            </View>
            <View style={estilosCadastrar.conteiner}>
                <View style={estilosCadastrar.conteiner_input}>
                    <Text style={estilosCadastrar.texto_algin}>Usuário:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default"
                        value={usuario}
                        onChangeText={setUsuario}
                    />
                    <Text style={estilosCadastrar.texto_algin}>Endereço:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default"
                        value={endereco}
                        onChangeText={setEndereco}
                    />
                    <Text style={estilosCadastrar.texto_algin}>Número de Telefone:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="number-pad"
                        maxLength={11}
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                    <Text style={estilosCadastrar.texto_algin}>Email:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={estilosCadastrar.texto_algin}>Nova Senha:</Text>
                    <Text style={estilosCadastrar.texto_algin_senha}>a senha deve têm 8 caracteres alfanuméricos @nA90?</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default"
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <Text style={estilosCadastrar.texto_algin}>Confirma Senha:</Text>
                    <TextInput
                        style={estilosCadastrar.meutextinput}
                        keyboardType="default"
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                    />
                    <View style={estilosCadastrar.conteiner_botoes}>
                        <Button title="Cancelar" color={"red"} onPress={cancelarConfiguracoes} />
                        <Button title="Salvar" onPress={salvarConfiguracoes} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


// Estilos para modais e botões
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15
    },
    buttonOpen: {
        backgroundColor: '#2196F3',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
});

// Tab Navigator para menu inferior com ícones
const Tab = createBottomTabNavigator();

function MyTabs({ adicionarProduto, carrinho, setCarrinho, comprasRealizadas, setComprasRealizadas }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    // Define ícone para cada aba
                    if (route.name === 'Ofertas') {
                        iconName = 'pricetags-outline';
                    } else if (route.name === 'Carrinho') {
                        iconName = 'cart-outline';
                    } else if (route.name === 'Entrega') {
                        iconName = 'bicycle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4CAF50',
                tabBarInactiveTintColor: 'gray',
            })}
        >{/* Abas do menu inferior */}
            <Tab.Screen name="Ofertas">
                {() => <ProdutoScreen adicionarProduto={adicionarProduto} />}
            </Tab.Screen>
            <Tab.Screen name="Carrinho">
                {() => <CarrinhoScreen
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                    comprasRealizadas={comprasRealizadas}
                    setComprasRealizadas={setComprasRealizadas}
                />}
            </Tab.Screen>
            <Tab.Screen name="Entrega">
                {() => <EntregaScreen comprasRealizadas={comprasRealizadas} setComprasRealizadas={setComprasRealizadas} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

// Drawer Navigator para menu lateral
const Drawer = createDrawerNavigator()

function MyDrawer(props) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Mercadinho Alcântara'>
                {() => <MyTabs {...props} />}
            </Drawer.Screen>
            <Drawer.Screen name='Configurações' component={ConfiguracaoScreen} />
        </Drawer.Navigator>
    );
}

// Componente principal do app, controla estados globais
function App() {
    // Estado do carrinho e das compras realizadas
    const [carrinho, setCarrinho] = useState([]);
    const [comprasRealizadas, setComprasRealizadas] = useState([]);

    // Função para adicionar produto ao carrinho
    const adicionarProduto = (produto) => {
        setCarrinho([...carrinho, produto]);
    };

    return (
        <NavigationContainer>
            <RootNavigator
                adicionarProduto={adicionarProduto}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                comprasRealizadas={comprasRealizadas}
                setComprasRealizadas={setComprasRealizadas}
            />
        </NavigationContainer>
    );
}

// Exporta o componente principal
export default App;