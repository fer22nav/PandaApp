import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {mainStyles, loginStyles} from '@styles/styles';
import MyTextInput from '@components/MyTextInput';
import MyButton from '@components/MyButton';
import {UserContext} from '@context/UserContext';
import color from '@styles/colors';

export default function LoginScreen(props) {
  const [login, loginAction] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);
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
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <MyButton title="Iniciar sesion" onPress={() => logIn()} />
      <MyButton
        title="Registrarse"
        transparent={true}
        onPress={() => goToScreen('Registration')}
      />
      <View>
        <TouchableOpacity onPress={() => goToScreen('RecoverPassword')}>
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

  function logIn() {
    loginAction({
      type: 'sign',
      data: {
        email,
        password,
      },
    });
    goToScreen('Home');
  }
  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }
}
