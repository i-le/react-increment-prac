import React from 'react';
import {INCREMENT, DECREMENT} from '../redux/action-types'

export default class App extends React.Component {
   

    increment = () => {
        const number = this.select.value*1
        this.props.store.dispatch({type: INCREMENT, data: number})
        
    }

    decrement = () => {
        const number = this.select.value*1
        this.props.store.dispatch({type: DECREMENT, data: number})
        
    }
    incrementOdd = () => {
        const number = this.select.value*1
        if (this.props.store.getState() % 2 === 1){
            this.props.store.dispatch({type: INCREMENT, data: number})
    }
}
    decrementAsync = () => {
        const number = this.select.value*1
        setTimeout(() => {
            this.props.store.dispatch({type: INCREMENT, data: number})
        }, 5000);
        
    }

    render() {
        return(
            <div>
            <div>
                <p>click {this.props.store.getState()} times</p>
            </div>
            <div>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>


                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

                
                <button onClick={this.incrementOdd}>increment if odd</button>
                <button onClick={this.decrementAsync}>increment if async</button>
            </div>
            </div>
        )
    }

}