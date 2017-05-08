import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import { increment, decrement} from './actions'

class App extends Component {
    render() {
        const { counter, onIncrement, onDecrement } = this.props;

        return (
            <div className="App">
                <div>{counter}</div>
                <div><button onClick={onIncrement}>Increment</button> <button onClick={onDecrement}>Decrement</button></div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        counter: state.count
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        onIncrement: () => {
            dispatch(increment());
        },
        onDecrement: () => {
            dispatch(decrement());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
