import {StyleSheet} from 'react-native';
import color from './colors';

//Estilos para MainScreen
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.WHITE,
  },

  containerCenter: {
    paddingTop: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  titleText: {
    fontSize: 22,
    marginTop: 10,
    color: color.BLUE,
    fontFamily: 'Poppins-SemiBold',
  },

  btnMain: {
    width: 280,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: color.BLUE,
    borderRadius: 60,
  },

  btnTransparent: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: color.BLUE,
    width: 280,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 60,
  },

  btntxt: {
    textAlign: 'center',
    fontSize: 17,
    color: color.WHITE,
    paddingVertical: 15,
    fontFamily: 'Poppins-Bold',
  },

  txtTransparent: {
    color: color.BLUE2,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.WHITE,
  },
});

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({
  logo: {
    paddingTop: 50,
    alignItems: 'center',
  },
});

//Estilos para RegistroScreen
const registrationStyles = StyleSheet.create({
  checkBox: {
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
    backgroundColor: color.WHITE,
  },

  containerSocial: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonSocialIcon: {
    marginBottom: 10,
    width: 250,
    height: 60,
    alignItems: 'center',
    borderRadius: 60,
  },
});

export {mainStyles, splashStyles, loginStyles, registrationStyles};