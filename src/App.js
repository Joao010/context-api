import { Alunos } from "./components/Alunos";
import { UserProvider } from './contexts/user';

export const App = () => {
  return (
    <UserProvider>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>School</h1>

        <hr style={{margin: '0 10px', height: 50}}/>

        <Alunos/>
      </div>
    </UserProvider>
  );
}
