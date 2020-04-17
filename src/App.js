import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hola(props){
  return <h2>{props.title}</h2>
}

class Chau extends Component {
  render(){

    const textoSegunBool= this.props.buleano ? 'EsTrue' : 'EsFalse'
    const mapednumbrers = this.props.arrayOfNumbers.map( n => n*2)
    return (
    <div>
      <p>{ this.props.title }</p>
      <p>{this.props.number}</p>
      <p>aca deberia mostrar el booleano pero la expresion no se renderiza:</p>
      <p>{this.props.buleano}</p>
      <p>aca solamente pasa a string el boleano para que se renderize:</p>
      <p>{JSON.stringify(this.props.buleano)}</p> 
      <p>aca muestra el texto segun si props es falso o true:</p>
      <p>{textoSegunBool}</p>  
      <p>aca muestra el array de props:</p>
      <p>{this.props.arrayOfNumbers.join(', ')}</p>
      <p>aca los multiplica x 2:</p>
      <p>{mapednumbrers.join(', ')}</p>
      <p>Aca con objetos</p>
      <p>{this.props.arrayOfObjects.key}</p>

    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenido</h2>
        <Hola title="bizarro"/>
        <p> esto es tiempo real??</p>
        <Chau 
        arrayOfNumbers={[2,3,10]}
        arrayOfObjects={{key : 'valor1', key2 : 'valor2'}}
        title="segundo componente" 
        number={3+4} 
        buleano={true} />
      </header>
    </div>
  );
}

export default App;
