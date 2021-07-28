import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.css';

const Page = (props) => {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
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
