import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/loginActions';
import { validate } from '../../utils/validation';
import { saveToken } from '../../utils/storage';
import { NavigationActions, StackActions } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import * as screenNames from "../../navigation/screen_names";
import Toast from "react-native-root-toast";

class LoginContainer extends Component {

    state = { isLoading: false }
    onSuccess = (data) => {
        this.setState({ isLoading: false })
        if (data.status) {
            if (data.token && data.token.length > 0) {
                saveToken(data.token).then((isSuccess) => {
                    if (isSuccess) {
                        const { navigation } = this.props;
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: screenNames.APP }),
                            ],
                        });
                        navigation.dispatch(resetAction);
                    }
                });
            }
        } else {
            Toast.show(data.message)
        }
    }
    onError = (error) => {
        this.setState({ isLoading: false })
        console.log(error)
        Toast.show('Đăng nhập thất bại')
    }
    login = (params) => {
        const phoneValidation = validate('phone', params.phone.trim())
        const passwordValidation = validate('password', params.password.trim())
        params.device_id = DeviceInfo.getUniqueID()

        if (phoneValidation.isError) {
            Toast.show(phoneValidation.messageError)
        } else if (passwordValidation.isError) {
            Toast.show(passwordValidation.messageError)
        } else {
            this.setState({ isLoading: true })
            this.props.actions.login.login(params, this.onSuccess, this.onError)
        }
    }
    render() {
        return (
            <Login login={this.login} loading={this.state.isLoading} />
        );
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: bindActionCreators(loginActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
