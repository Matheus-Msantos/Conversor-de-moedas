import React from 'react';
import './Conversor-moedas.css';
import { Button, Form, Col, Spinner } from 'react-bootstrap';

function ConversorMoedas() {
  return (
    <div className="c-moedas-container">
      <h1>Conversor-moedas</h1>
      <div className="c-moedas-container-convertor">

        <div className="c-moedas-box">
          <input
            className="c-moedas-box-campo"
            type="number"
            value={1}
            required
          />
        </div>

        <div className="c-moedas-box">
          <select className="c-moedas-box-campo">

          </select>
        </div>

        <div className="c-moedas-box--icon">
          <i className="fas fa-angle-double-right"></i>
        </div>

        <div className="c-moedas-box">
          <select className="c-moedas-box-campo">

          </select>
        </div>

        <div className="c-moedas-box">
          <button className="c-moedas-botao" type="submit">
            <Spinner animation="border" size="sm"></Spinner>
            Converter
          </button>
        </div>
      </div>
    </div>

  );
}

export default ConversorMoedas;
