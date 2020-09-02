import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '@screens/SplashScreen';
import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';
import RecoverPasswordScreen from '@screens/RecoverPasswordScreen';
import RegistrationScreen from '@screens/RegistrationScreen';

const AppNavigation = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RecoverPassword: {
    screen: RecoverPasswordScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registration: {
    screen: RegistrationScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(AppNavigation);
