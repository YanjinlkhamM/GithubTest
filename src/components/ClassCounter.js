import React, { Component } from 'react';
// class component 
class ClassCounter extends Component {
    // variable
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    // create method 
    incrementCount = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick ={this.incrementCount}> Count  = {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounter;