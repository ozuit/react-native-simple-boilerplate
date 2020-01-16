import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import * as screenNames from "./screen_names";
import { clearToken } from '../utils/storage';
import { NavigationActions, StackActions } from 'react-navigation';

const Style = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLeft: {
        flex: 3,
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
    },
    headerRight: {
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: 5,
        flexDirection: 'row',
        marginTop: 10,
    },
    logoutIcon: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 2,
    },
    logoutText: {
        fontSize: 14,
        color: '#fff',
    }
})

class HeaderComponent extends React.Component {
    handleLogout = () => {
        Alert.alert(
            '',
            'Bạn có chắc chắn muốn thoát ứng dụng?',
            [
              {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Có', onPress: () => {
                clearToken()
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: screenNames.LOGIN }),
                    ],
                });
                this.props.navigation.dispatch(resetAction)
              }},
            ],
            { cancelable: false }
        )
    }

    render() {
        const { userInfo } = this.props.data

        return (
            <View style={Style.headerContainer}>
                <Text style={Style.headerLeft}>Xin chào, {userInfo.name}</Text>
                <TouchableOpacity style={Style.headerRight} onPress={this.handleLogout}><Text style={Style.logoutText}>Thoát</Text><IconMaterialCommunityIcons style={Style.logoutIcon} name="logout-variant" /></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: {
        userInfo: state.login.userInfo
    }
})

export default connect(mapStateToProps, null)(HeaderComponent)