import React, { Component } from 'react';
import './App.css';
import Estado from './components/Estado';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tablero: Array(9).fill(null),
      jugador: null,
      ganador: null,
    }
  }

  Ganador() {
    let tateti =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
    this.checkeoDeLineas(tateti)
  }
  //https://codepen.io/zdflower/pen/RgGeqy
  checkeoDeLineas(tateti) {
    for (let index = 0; index < tateti.length; index++) {
      const [a, b, c] = tateti[index];
      let tablero = this.state.tablero
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        this.setState({
          ganador: this.state.jugador
        })
      }
    }
  }
  Turno(index) {
    if (this.state.jugador && !this.state.ganador) {
      let newtablero = this.state.tablero
      if (this.state.tablero[index] === null) {
        newtablero[index] = this.state.jugador
        this.setState({
          tablero: newtablero,
          jugador: this.state.jugador === "X" ? "O" : "X"
        })
        this.Ganador()
      }
    }
  }
  setJugador(jugador) {
    this.setState({ jugador })
  }
  renderearTabla() {
    return this.state.tablero.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.Turno(index)}>
          {box} </div>
    )
  }
  resetear() {
    this.setState({
      jugador: null,
      ganador: null,
      tablero: Array(9).fill(null)
    })
  }
  render() {
    return (
      <div className="contenedor-grid">
        <div className="contenido">
          <div className="board">
            {this.renderearTabla()}
          </div>
        </div>
        <header className="header">
          <div className="tateti">Tateti</div>
        </header>
        <aside className="sidebar">
        <div>
            <Estado
              jugador={this.state.jugador}
              setJugador={(e) => { this.setJugador(e) }}
              ganador={this.state.ganador}
            />
            <button className="buttom" disabled={!this.state.ganador} onClick={() => this.resetear()}>resetear</button>
        </div>
        </aside>
      </div>
    );
  }
}

export default App;
