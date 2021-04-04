import { createContext, useState } from 'react';

// creating the context
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [ alunos, setAlunos ] = useState('João Pedro');
  const [ qtdAlunos, setQtdAlunos ] = useState(100);

  return (
    <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
      { children }
    </UserContext.Provider>
  );
}
