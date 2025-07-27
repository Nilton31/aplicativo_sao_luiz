import { StyleSheet } from "react-native";

export default StyleSheet.create({

    configuracao:{
        backgroundColor: "#F8F8FF"
    },

    conteiner: {
        marginHorizontal: 20,
        marginVertical: 90,
        marginTop: "auto"
    },

    conteiner_logo: {
        width: 220,
        height: 220,
        margin: 'auto',
        marginTop: 20
    },

    conteiner_input: {
        padding: 10
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
        marginTop: 10,
        height: 40,
        margin: 12,
        borderBottomWidth: 0.5
    },
    texto_algin: {
        marginTop: 20,
        marginLeft: 10,
        padding: 5,
        fontSize: 15

    },

    texto_algin_senha: {
        fontSize: 11,
        fontWeight: "ultralight",
        marginTop: 7,
        marginLeft: 10,
        padding: 5
    },

    conteiner_botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15
    }
});