import React, {useState} from 'react';
import './App.css';

const Page = () => {
  const [nome, setNome] = useState('Sicrano');
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

export default Page;
