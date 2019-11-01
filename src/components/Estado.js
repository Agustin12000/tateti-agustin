import React, { Component } from 'react';
import Jugador from './ElegirJugador';

class Estado extends Component {
    handleSetJugador(e) {
        this.props.setJugador(e)
    }
    renderHtml() {
        if (this.props.ganador) {
            return (<div className="text-player">El ganador es {this.props.ganador}</div>)
        }else {
            return this.props.jugador ?
                <div className="text-player">Es turno de {this.props.jugador}</div> :
                <Jugador jugador={(e) => this.handleSetJugador(e)} />
        }
    }
    render() {
        return (<span>{this.renderHtml()}</span>)
    }
}

export default Estado;