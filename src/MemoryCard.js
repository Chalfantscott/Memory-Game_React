//Using App.js as a reference, define a react Component class and export it
//Name the class “MemoryCard”
//Make sure to include React and { Component } at the top
//Make sure you include the “export default” statement at the bottom.test

import React, { Component } from 'react';


class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard">
                <img src='DigitalCrafts-Logo-Wrench.png' alt='digitalcrafts logo' />
                
            </div>
        )
    }
};

export default MemoryCard;
