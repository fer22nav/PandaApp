import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
  BackHandler,
} from 'react-native';
import MyButton from '@components/MyButton';
import {mainStyles} from '@styles/styles';
import {UserContext} from '@context/UserContext';
import {color} from 'react-native-reanimated';

function useBackButton(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      console.log('hardwareBackPress close');
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
export default function HomeScreen(props) {
  useBackButton(singOut);
  const [login, loginAction] = useContext(UserContext);
  return (
    <View style={mainStyles.container}>
      <StatusBar
        backgroundColor={color.BLUE}
        barStyle="dark-content"
        translucent={true}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          fontFamily: 'Poppins-Bold',
        }}>
        Bienvenidx {login.user.email}
      </Text>
      <MyButton title="Cerrar Sesión" onPress={() => singOut()} />
    </View>
  );

  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }
  function singOut() {
    Alert.alert('Salir', 'Está seguro que \ndesea cerrar sesión?', [
      {
        text: 'Si',
        onPress: () => {
          loginAction({
            type: 'sign-out',
            data: {},
          });
          goToScreen('Login');
        },
      },
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  }
}
