import React from 'react';

import Routes from './src/routes';
import ContexProvider from './src/contexts/app';


 function App() {
  return (

    <ContexProvider>
        <Routes />
    </ContexProvider>
    
  );
}
export default App