import React, { Component } from 'react';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Ajax from './Ajax.js';
import { Link, Route } from 'react-router-dom'; 


class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to='/Memory'>Memory Game</Link>
                    <Link to='/Ajax'>Ajax</Link>
                </div>
                <switch>
                    <Route path='/memory' component={MemoryGame}/>
                    <Route path='/Ajax' component={Ajax}/>
                </switch>
            </div>
        )
    }
}

export default App;