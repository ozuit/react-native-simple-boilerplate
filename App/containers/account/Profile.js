import React, { Component } from "react";
import { Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import { Card, Text } from "react-native-elements";
import Toast from "react-native-root-toast";
import * as accountApis from '../../services/accountApis';
import DeviceInfo from 'react-native-device-info';
import Loader from '../../components/Loader';
import PasswordInput from '../../components/PasswordInput';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import * as screenNames from "../../navigation/screen_names";

class Profile extends Component {
    state = {
        current_pass: '',
        new_pass: '',
        confirm_pass: '',
        loading: false,
    }

    handleChangePassword = () => {
        const { current_pass, new_pass, confirm_pass } = this.state;

        if (current_pass && new_pass && confirm_pass) {
            accountApis.changePass({ old_password: current_pass, new_password: new_pass, confirm_password: confirm_pass }).then((res) => {
                if (res.status) {
                    Toast.show(res.message)
                    const { navigation } = this.props;
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: screenNames.APP }),
                        ],
                    });
                    navigation.dispatch(resetAction);
                } else {
                    Toast.show(res.message)
                }
            })
        } else {
            Toast.show('Vui lòng nhập đầy đủ thông tin!')
        }
    }

    renderContent = () => {
        const { userInfo } = this.props.data

        return (
            <ScrollView>
                <Loader loading={this.state.loading} />
                <Text style={styles.appVersion}>{'Phiên bản hiện tại: ' + DeviceInfo.getVersion()}</Text>
                <Card title='Thông tin cá nhân'>
                    <Text style={{ marginBottom: 15 }}>Họ & tên: {userInfo.name}</Text>
                    <Text>Số điện thoại: {userInfo.phone}</Text>
                </Card>
                <Card title='Mật khẩu đăng nhập'>
                    <PasswordInput inputStyle={styles.txtPass} iconStyle={{ position: 'absolute', top: Platform.OS == 'ios' ? 5 : 10, right: 0 }} placeholder='Mật khẩu hiện tại' onChange={current_pass => this.setState({ current_pass })} />
                    <PasswordInput inputStyle={styles.txtPass} iconStyle={{ position: 'absolute', top: Platform.OS == 'ios' ? 5 : 10, right: 0 }} placeholder='Mật khẩu mới' onChange={new_pass => this.setState({ new_pass })} />
                    <PasswordInput inputStyle={styles.txtPass} iconStyle={{ position: 'absolute', top: Platform.OS == 'ios' ? 5 : 10, right: 0 }} placeholder='Nhập lại mật khẩu mới' onChange={confirm_pass => this.setState({ confirm_pass })} />

                    <TouchableOpacity
                        style={styles.btnStyle}
                        activeOpacity={0.8}
                        onPress={this.handleChangePassword}
                    >
                        <Text style={styles.btnTextStyle}>ĐỔI MẬT KHẨU</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        )
    }

    render() {
        return (
            Platform.OS === 'ios' ? (
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    { this.renderContent() }
                </KeyboardAvoidingView>
            ) : (
                <KeyboardAvoidingView style={styles.container} >
                    { this.renderContent() }
                </KeyboardAvoidingView>
            )
        );
    }
}

const mapStateToProps = (state) => ({
    data: {
        userInfo: state.login.userInfo
    }
})

export default connect(mapStateToProps, null)(Profile)