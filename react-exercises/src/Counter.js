import React, { Component } from 'react';

class Counter extends Component {
    constructor () {
        super() 
            this.state = {
                value: 0
            }
    }

    incrementNumb = () => {
        this.setState({
            value: this.state.value + 1
        });
        console.log(this.state.value)
    }

    render() {
        
      return (
        <div>
            <h1>{this.state.value}</h1>
            <button onClick={this.incrementNumb.bind(this)}>Increment</button>
        </div>
      )
        
    }
}

export default Counter;

/*2) UPDATING SIMPLE STATE
- Make a component called Counter
- Make it render a number and a button
- Make it so that the number increments everytime you click the button*/

