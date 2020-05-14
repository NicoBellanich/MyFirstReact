import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hola(props){
  return <h2>{props.title}</h2>
}

class Text extends Component {
  render(){
    // esto es para  que cada vez que se use nos e tenga q poner this.props
    const {
      title, 
      number , 
      buleano, 
      multiplicacion , 
      arrayOfNumbers, 
      arrayOfObjects
    } = this.props 
    
    const textoSegunBool= buleano ? 'EsTrue' : 'EsFalse'
    // const mapednumbrers = this.props.arrayOfNumbers.map( n => n*2) Esta forma se puede reemplazar por la de abajo pero como extra, se tiene que definir multiplicacion como prop adentro de la etiqueta Text
    const mapednumbrers = arrayOfNumbers.map(multiplicacion)
    return (
    <div>
      <p>{title }</p>
      <p>{number}</p>
      <p>{buleano}</p> {/* aca deberia mostrar el booleano pero la expresion no se renderiza */}
      <p>{JSON.stringify(buleano)}</p>  {/* aca solamente pasa a string el boleano para que se renderize */}
      <p>{textoSegunBool}</p>  {/* aca muestra el texto segun si props es falso o true */}
      <p>{arrayOfNumbers.join(', ')}</p> {/* aca muestra el array de props */}
      <p>{mapednumbrers.join(', ')}</p> {/* Array multiplicados por 2 */}
      <p>{arrayOfObjects.key}</p> {/* Array con objetos */}

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

        <Text 
        arrayOfNumbers={[2,3,10]}
        arrayOfObjects={{key : 'valor1', key2 : 'valor2'}}
        title="segundo componente" 
        buleano={true}
        number={3+4} 
        multiplicacion= {(number)=> number *100 }
        />

      </header>
    </div>
  );
}

export default App;
