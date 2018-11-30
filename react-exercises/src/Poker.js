import React, { Component } from 'react';

class Poker extends Component {
    constructor() {
        super();
        this.state = {
            pokerHand: [
                {
                    number: 4,
                    suit: "hearts"
                },
                {
                    number: 5,
                    suit: "diamonds"
                }
            ]
        };
    }

    addRandomCard() {
        let newPokerHand = this.state.pokerHand.map((card)=>{
            return {...card}
        });

        var suits = ["hearts", "diamonds", "clubs", "spades"];
        newPokerHand.push({
            number:  Math.floor(Math.random()*13 + 1),
            suit: suits[Math.floor(Math.random()*4)]
        })
        this.setState({
            pokerHand: newPokerHand
        })
    }

    render() {
        return (
            <div>
                {this.state.pokerHand.map((card)=>{
                    return <h1>{card.number} of {card.suit}</h1>
                })}
                <button onClick={this.addRandomCard.bind(this)}>Add a random card</button>
                <button>Change all to jokers</button>
            </div>
        )
    }
}

export default Poker;