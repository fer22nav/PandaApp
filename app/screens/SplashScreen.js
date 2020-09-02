import React, {useContext, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {splashStyles} from '@styles/styles';
import {getUser} from '@storage/UserAsyncStorage';
import {UserContext} from '@context/UserContext';

export default function SplashScreen(props) {
  const [login, loginAction] = useContext(UserContext);

  useEffect(() => {
    fetchSesion(loginAction);
  }, []);

  return (
    <View style={splashStyles.image}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          width: 200,
          height: 200,
          margin: 100,
        }}
        source={require('@resources/images/panda.jpeg')}
      />
    </View>
  );

  async function fetchSesion(loginAction) {
    const response = await getUser();
    console.log(response);
    if (response == null) {
      setTimeout(() => {
        goToScreen('Login');
      }, 3000);
      return;
    }
    loginAction({type: 'sing-in', data: response});
    setTimeout(() => {
      goToScreen('Home');
    }, 500);
  }
  function goToScreen(routeName) {
    props.navigation.replace(routeName);
  }
}
