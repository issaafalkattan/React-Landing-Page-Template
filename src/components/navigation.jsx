import React from "react";
import LogoImag from "./VERSÃO PRINCIPAL.png";
import "./LogoImg.css";


export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="LogoTopo" href="#page-top">
          <img src={LogoImag} alt="Logo"  width="100" srcset="" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
              Depoimentos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
              Pacientes
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
