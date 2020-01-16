import React, { Component } from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView, Image, Text, TouchableOpacity } from 'react-native';
import Input from '../commons/Input';
import { Images } from '../../assets';
import Loader from '../../components/Loader';

class Login extends Component {
    state = { phone: '', password: '', loading: false }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Loader loading={this.state.loading} />
                <Image style={styles.imgStyle} source={Images.logo} resizeMode={'contain'} />
                <Text style={styles.textStyle}>REACT NATIVE BOILERPLATE</Text>
                <Input
                    keyboardType="number-pad"
                    style={styles.inputStyle}
                    placeholder='Số điện thoại'
                    onChangeText={(value) => this.setState({ phone: value })} />
                <Input
                    style={styles.inputStyle}
                    placeholder='Mật khẩu'
                    secureTextEntry
                    onChangeText={(value) => this.setState({ password: value })} />
                <TouchableOpacity
                    style={styles.btnStyle}
                    activeOpacity={0.8}
                    onPress={() => this.props.login({ phone: this.state.phone, password: this.state.password })}
                    >
                    <Text style={styles.btnTextStyle}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.loading
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
    },
    imgStyle: {
        alignSelf: 'center',
        margin: 15,
        width: 150,
        height: 150,
    },
    inputStyle: {
        fontSize: 15,
        margin: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        marginTop: 20,
        paddingBottom: Platform.OS === 'ios' ? 10 : 5
    },
    btnStyle: {
        backgroundColor: '#4D4D4D',
        margin: 15,
        height: 40,
        borderRadius: 30,
    },
    btnTextStyle: {
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 40,
        fontWeight: 'bold',
    },
})

export default Login;
