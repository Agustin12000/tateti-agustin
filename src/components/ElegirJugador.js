import React, { Component } from 'react';

class Jugador extends Component {

    handleForm(e) {
        e.preventDefault();
        this.props.jugador(e.target.jugador.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>
                <label className="text">
                    Jugador X
                <input type="radio" name="jugador" value="X" />
                </label>
                <label className="text">
                    Jugador O
                <input type="radio" name="jugador" value="O" />
                </label>
                <input className="buttom" type="submit" value="Start" />
            </form>
        )
    }
}

export default Jugador;