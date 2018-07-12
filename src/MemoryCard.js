//Using App.js as a reference, define a react Component class and export it
//Name the class “MemoryCard”
//Make sure to include React and { Component } at the top
//Make sure you include the “export default” statement at the bottom

import React, { Component } from 'react';
import './MemoryCard.css';



class MemoryCardBack extends Component {
  
    render() {

      
        var memoryCardInnerClass = "MemoryCardInner";

        if (this.props.isFlipped) {
            memoryCardInnerClass+= " flipped";
        }
        
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack"><img src="DigitalCrafts-Logo-Wrench.png" alt="DigitalCrafts"/></div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        )
    }
};

export default MemoryCardBack;
