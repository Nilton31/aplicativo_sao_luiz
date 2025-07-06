import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    barra_rolagem: {
        borderWidth: 1
    },

    row: {
        flexDirection: "row",
        
    },

    col: {
        margin: 'auto',
        flexDirection: "column",
        padding: 25,
        marginTop: 15,
        marginLeft: -1,
        marginRight: -15,
        height: 320,
        width: 200
    },

    conteiner_botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15
    },

    imagen_produto: {
        width: 130,
        height: 130,
        margin: 'auto'
    },

    botao_adicionar: {
        width: 120,
        height: 120,
        margin: 'auto'
    },

    botao_adicionar_danone: {
        width: 120,
        height: 120,
        margin: 'auto',
        marginTop: 13
    },

    discricao_produto: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#C0C0C0'
    },

    preco_produto: {
        fontSize: 20,
        color: 'black'
    }
});