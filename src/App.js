import React, {useState} from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('Fulano');
  const handleButton = ()=>{
  setNome('Rigoberto');
}
  return (
    <>
      <div>Oi, tudo bem {nome}? </div>
      <button onClick={handleButton}>Mudar o nome</button>
      </>
  );
}

export default App;
