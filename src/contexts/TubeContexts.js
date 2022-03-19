import React, { createContext, useState } from 'react';

const TubeContexts = createContext();
const TubeProvider = ({ children }) => {
  const [state, setStateGlobal] = useState({
    small: false,
  });

  const { small } = state;

  const context = { state, setStateGlobal, small };

  return (
    <TubeContexts.Provider value={ context }>
      {children}
    </TubeContexts.Provider>
  );
};

export { TubeContexts, TubeProvider as Provider };
