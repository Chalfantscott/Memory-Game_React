import React, { Component } from 'react';

class RenderingState extends Component {
    constructor () {
        super();
        this.state = {
            cats: 5,
            dogs: 2
        }
    }

  
  

    render () {
        let catNum = this.state.cats;
        let dogNum = this.state.dogs;


        return (<h1>you have {catNum} cats and  {dogNum} dogs; therefore, you are a {catNum > dogNum ? "cat" : "dog"} person.</h1>)
    }
}
export default RenderingState;

/*- Use that state to render text like this:
   "You have 5 cats and 2 dogs, therefore you are a cat person"
- Don't hard-code the word "cat" in the text. 
  Instead, have it compare the number of cats and dogs in the state*/
  