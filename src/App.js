import React, {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';

const Page = (props) => {
  const [nome, setNome] = useState('Beltrano');
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

const mapStateToProps = (state) =>{
  return {

  };
}

const mapDispatchToProps = (dispatch) =>{
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);
