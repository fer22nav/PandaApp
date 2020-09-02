import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {mainStyles, loginStyles} from '@styles/styles';
import MyTextInput from '@components/MyTextInput';
import color from '@styles/colors';

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function LoginScreen(props) {
  const [hidePassword, SetHidePassword] = useState(false);
  return (
    <View style={[mainStyles.container, {padding: 40}]}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={require('@resources/images/panda.jpeg')}
          style={{height: 130, width: 130}}
        />
        <Text style={[mainStyles.btntxt, {color: color.BLUE}]}>Panda App</Text>
      </View>
      <MyTextInput
        keyboardType="email-address"
        placeholder="E-mail"
        image="user"
      />
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => SetHidePassword(!hidePassword)}
      />
      <View style={mainStyles.btnMain}>
        <TouchableOpacity onPress={() => goToScreen(props, 'Home')}>
          <Text style={mainStyles.btntxt}>Iniciar sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={mainStyles.btnTransparent}>
        <TouchableOpacity onPress={() => goToScreen(props, 'Registration')}>
          <Text style={[mainStyles.btntxt, {color: color.BLUE}]}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => goToScreen(props, 'RecoverPassword')}>
          <Text
            style={[
              mainStyles.txtTransparent,
              {textDecorationLine: 'underline'},
            ]}>
            Olvide mi Contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
