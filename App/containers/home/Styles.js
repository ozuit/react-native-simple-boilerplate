import { StyleSheet, Platform, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
    welcomeContainer: {
        margin: 0,
        paddingTop: Platform.OS == 'ios' ? 30 : 10,
        marginBottom: 2,
        backgroundColor: "#88c74a",
        borderWidth: 0,
    },
    welcomeText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    menuItem: {
        height: (width - 8) / 2,
        width: (width - 8) / 2,
        borderWidth: 1,
        borderColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        margin: 2,
    },
    txtMenu: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'normal',
    },
    headerBar: {
        backgroundColor: "#88c74a",
        flexDirection: 'row',
        alignItems: "center",
    },
    imgStyle: {
        width: 50,
        height: 50,
        margin: 10,
    },
    txtHeader: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    banner: {
        height: 150,
        width: '100%',
    }
})