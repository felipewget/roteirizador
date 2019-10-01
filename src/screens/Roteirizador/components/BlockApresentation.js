import React,
       { Component,
         Fragment }     from 'react';
import { Link }         from 'react-router-dom';

class BlockApresentation extends Component {

  constructor( props )
  {

    super();

    this.state = {
      loading: false
    }

  }

  render() {

    let { loading } = this.state;

    return (
      <div data-container-block-apresentation>

        <div data-container-apresentation={ loading ? "loading" : "" } >

          <h1>
            <span>Loading</span>, seja bem vindo
          </h1>

          <p>Crie suas proprias rotas otimizadas</p>

          <ul>
            <li>1. Selecione a Origem e o Destino</li>
            <li>2. (Opcional) Clique em "+" para adicionar paradas</li>
            <li>3. Clique em Gerar Rotas</li>
          </ul>

        </div>

      </div>
    );

  }
}

export default BlockApresentation;
