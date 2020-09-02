import React from 'react';
import AppNavigation from '@navigation/AppNavigation';
import {UserProvider} from '@context/UserContext';

function App() {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
}

export default App;
