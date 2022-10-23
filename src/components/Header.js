import React from "react";
import logo from "../image/logo.svg";
export default function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="лого" className="logo" />
    </header>
  );
}
