import { useContext } from 'react';
import { Nome } from '../Nome';
import { UserContext } from '../../contexts/user';

export const Alunos = () => {
  const { qtdAlunos } = useContext( UserContext );

  return (
    <div>
      <h2>Online Students: { qtdAlunos }</h2>

      <Nome/>
    </div>
  );
}
