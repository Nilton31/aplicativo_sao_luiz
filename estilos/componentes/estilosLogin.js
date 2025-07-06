import { StyleSheet } from "react-native";

export default StyleSheet.create({
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

    title_h1: {
        textAlign: "center",
        fontSize: 23,
        fontWeight: "bold"
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
    }

});