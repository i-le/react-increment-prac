import React from 'react';

export default class App extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        const number = this.select.value*1
        this.setState({
            count: this.state.count + number
        })
    }

    decrement = () => {
        const number = this.select.value*1
        this.setState({
            count: this.state.count - number
        })
    }
    incrementOdd = () => {
        const number = this.select.value*1
        if (this.state.count%2===1){
        this.setState({
            count: this.state.count + number
        })
    }
}
    decrementAsync = () => {
        const number = this.select.value*1
        setTimeout(() => {
            this.setState({
            count: this.state.count + number
        })
        }, 5000);
        
    }

    render() {
        return(
            <div>
            <div>
                <p>click {this.state.count} times</p>
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