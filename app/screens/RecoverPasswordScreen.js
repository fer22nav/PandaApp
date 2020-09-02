import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {mainStyles, loginStyles} from '@styles/styles';
import MyTextInput from '@components/MyTextInput';
import ToolBar from '@components/ToolBar';
import color from '@styles/colors';

function goToScreen(props, routeName) {
  props.navigation.navigate(routeName);
}

export default function RecoverPasswordScreen(props) {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: color.WHITE}}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />
      <ToolBar
        title="Contraseña"
        onPressLeft={() => goToScreen(props, 'Login')}
        iconLeft={require('@resources/images/back.png')}
      />
      <View style={[mainStyles.container, {padding: 40}]}>
        <Text style={mainStyles.titleText}>Recuperar Contraseña</Text>
        <MyTextInput
          keyboardType="email-address"
          placeholder="E-mail"
          image="user"
        />
        <View style={mainStyles.btnMain}>
          <TouchableOpacity onPress={() => goToScreen(props, 'Login')}>
            <Text style={mainStyles.btntxt}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
