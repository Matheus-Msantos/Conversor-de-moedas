import React from 'react';
import './Conversor-moedas.css';
import { Button, Form, Col, Spinner } from 'react-bootstrap';

function ConversorMoedas() {
  return (
    <>
      <div className="c-moedas-container">
        <h1>Conversor-moedas</h1>

        <div className="c-moedas-error">
          <span>Error</span>
        </div>

        <div className="c-moedas-container-convertor">

          <div className="c-moedas-box">
            <input
              className="c-moedas-box-campo"
              type="number"
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
      <div className="c-moedas-modal-overley">
        <div className="c-moedas-modal-container">
          <div className="c-moedas-modal-header">
            <h3>Conversão</h3>
            <i className="fas fa-times"></i>
          </div>

          <div className="c-moedas-modal-content">
            <span>lorem ipsum....</span>
          </div>

          <div className="c-moedas-modal-footer">
            <button>Nova conversão</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConversorMoedas;
