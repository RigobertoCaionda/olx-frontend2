import React, {useState} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const Page = (props) => {
  const [nome, setNome] = useState('Beltrano');
  const handleButton = ()=>{
  setNome('Rigoberto');
}
  return (
    <BrowserRouter>
        <div>Oi, tudo bem {nome}? </div>
        <button onClick={handleButton}>Mudar o nome</button>
        <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) =>{
  return {

  };
}

const mapDispatchToProps = (dispatch) =>{
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
