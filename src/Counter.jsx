import React, { Component } from 'react';
import './Counter.css'
import Heading from './Reusable components/Heading';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            name: '',
            isClicked: false
        }
    }


    incrementNumber = () =>  {
        this.setState({
            number: this.state.number === 10 ? this.state.number : this.state.number + 1
        })
    }

    decrementNumber = () =>  {
        this.setState(prevState => ({
            number: prevState.number === 0 ? prevState.number : prevState.number - 1,
            isClicked: !prevState.isClicked,

        }))
    } 


    render() {
        return (
            <>
                <Heading title="This title is coming from Counter.js" />
            
                <div className='wrapper'>
                    <div className='buttons'>
                    <button className='increment-btn' onClick={ this.incrementNumber }>Increment</button>
                    <button className='decrement-btn' onClick={ this.decrementNumber }>Decrement</button>
                </div>
                    
                <div className='result'>Result: { this.state.number }</div>
        </div>
        </>
        )
    }
}

 