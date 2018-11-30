import React, { Component } from 'react';
import './App.css';
import MemoryGame from './MemoryGame.js';
import { Link, Route, Switch} from 'react-router-dom'; 


class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to='/Memory'>Memory Game</Link>
                </div>
                <Switch>
                    <Route path='/Memory' component={MemoryGame}/>
                    <Route path='/' component={MemoryGame}/>
                </Switch>
            </div>
        )
    }
}

export default App;