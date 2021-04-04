import { useContext } from 'react';

import { UserContext } from '../../contexts/user';

export const Nome = () => {
  // using the context of "UserContext"
  const { alunos, setAlunos } = useContext( UserContext );
  
  return (
    <div>
      <span style={{color: '#611'}}>Welcome { alunos }!</span>

      <br/>

      <button onClick={() => setAlunos('Pedro')}>Change Name</button>
    </div>
  );
}
