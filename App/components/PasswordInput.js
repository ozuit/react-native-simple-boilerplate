import React, { Component } from "react";
import { TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class PasswordInput extends Component
{
   state = {
      show: false,
   }

   render() {
      return (
         <View style={{ position: 'relative' }}>
            <TextInput 
               style={this.props.inputStyle} 
               placeholder={this.props.placeholder} 
               secureTextEntry={!this.state.show} 
               onChangeText={current_pass => this.props.onChange(current_pass)}
               value={this.props.value}
               onSubmitEditing={this.props.onSubmitEditing}
               blurOnSubmit={this.props.blurOnSubmit}
               autoFocus={this.props.autoFocus}
            />
            <Icon 
               style={this.props.iconStyle}
               name={this.state.show ? "ios-eye-off" : "ios-eye"} 
               size={25} 
               color="#4D4D4D" 
               onPress={() => this.setState({ show: !this.state.show })} 
            />
         </View>
      )
   }
}