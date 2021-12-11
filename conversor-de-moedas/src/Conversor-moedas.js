import React, { useState } from 'react';
import './Conversor-moedas.css';
import ListarMoedas from './Listar-moedas'
import { Button, Form, Col, Spinner } from 'react-bootstrap';

function ConversorMoedas() {

  const [valor, setValor] = useState(1)
  const [moedaPrincipal, setMoedaPrincipal] = useState('BRL');
  const [moedaConverter, setMoedaConverter] = useState('USD');
  const [spinner, setSpinner] = useState(false)
  const [modal, setModal] = useState(false)

  const atualizarValor = (e) => {
    setValor(e.target.value);
  };

  const atualizarMoedaPrincipal = (e) => {
    setMoedaPrincipal(e.target.value);
  };

  const atualizarMoedaConverter = (e) => {
    setMoedaConverter(e.target.value);
  };

  const mostrarSpinner = () => {
    setSpinner(true)
  }

  const mostrarModal = () => {
    setModal(true)
  }

  const fecharModal = () => {
    setModal(false);
    setSpinner(false);
    setValor(1);
    setMoedaPrincipal('BRL');
    setMoedaConverter('USD');
  }

  const submitForm = (e) => {
    e.preventDefault();
    mostrarSpinner();
    mostrarModal();
  }

  return (
    <>
      <div className="c-moedas-container">
        <h1>Conversor-moedas</h1>

        <div className="c-moedas-error">
          <span>Error</span>
        </div>

        <div className="c-moedas-container-convertor">

          <form onSubmit={submitForm}>

            <div className="c-moedas-box">
              <input
                className="c-moedas-box-campo"
                type="number"
                placeholder='0'
                value={valor}
                onChange={atualizarValor}
                required
              />
            </div>

            <div className="c-moedas-box">
              <select className="c-moedas-box-campo" value={moedaPrincipal} onChange={atualizarMoedaPrincipal}>
                <ListarMoedas />
              </select>
            </div>

            <div className="c-moedas-box--icon">
              <i className="fas fa-angle-double-right"></i>
            </div>

            <div className="c-moedas-box">
              <select className="c-moedas-box-campo" value={moedaConverter} onChange={atualizarMoedaConverter}>
                <ListarMoedas />
              </select>
            </div>

            <div className="c-moedas-box">
              <button className="c-moedas-botao" type="submit">
                <span className={spinner === false ? 'c-moedas-hidden' : ''}>
                  <Spinner animation="border" size="sm" ></Spinner>
                </span>

                <span className={spinner === false ? '' : 'c-moedas-hidden'}>
                  Converter
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className={modal === false ? 'c-moedas-hidden' : 'c-moedas-modal-overley'} onClick={() => fecharModal()}>
      </div>

      <div className={modal === false ? 'c-moedas-hidden' : 'c-moedas-modal-container'}>
        <div className="c-moedas-modal-header">
          <h3>Conversão</h3>

          <button onClick={() => fecharModal()}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="c-moedas-modal-content">
          <span>lorem ipsum....</span>
        </div>

        <div className="c-moedas-modal-footer">
          <button onClick={() => fecharModal()}>Nova conversão</button>
        </div>
      </div>

    </>
  );
}

export default ConversorMoedas;
