import AsyncStorage from '@react-native-community/async-storage';

const USER_KEY = '@usuario:key';

async function saveUser(user) {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return JSON.stringify(user);
  } catch (error) {
    //Error
    console.log('error al guardar: ' + error.message);
    return 'Error de sintaxis';
  }
}

async function getUser() {
  try {
    const item = await AsyncStorage.getItem(USER_KEY);
    return JSON.parse(item);
  } catch (error) {
    // Error retrieving data
    console.log('Error al recuperar:' + error.message);
    return null;
  }
}

async function deleteUser() {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    const item = await AsyncStorage.getItem(USER_KEY);
    return item == null ? 'usuario removido' : 'usuario no removido';
  } catch (error) {
    console.log('Error al eliminar' + error.message);
    return 'Error de sintaxis';
  }
}

export {saveUser, getUser, deleteUser};
