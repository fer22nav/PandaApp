import React from 'react';
import AppNavigation from '@navigation/AppNavigation';
import UserProvider from '@context/UserProvider';

function App() {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
}

export default App;
