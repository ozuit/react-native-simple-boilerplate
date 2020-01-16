import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import { Text } from "react-native-elements";
import { connect } from 'react-redux';

class Notify extends Component {
    render() {
        return (
            <View>
                <Text>Comming Soon!</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    data: {
        userInfo: state.login.userInfo
    }
})

export default connect(mapStateToProps, null)(Notify)