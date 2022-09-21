import React from 'react';
import logo from '../image/logo.svg';
export default class Header extends React.Component{
  render(){
    return(
      <header className="header page__header">
        <img src={logo} alt="лого" className="logo"/>
      </header>
    )
  }
}