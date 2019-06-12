import React, { Component } from 'react';

interface CounterState {
  value: number;
}

interface Propsy {
  info: {
    name: string;
    surname: string;
  };
}

export class Counter extends Component<Propsy, CounterState> {
  state: CounterState = { value: 0 };

  render() {
    const { name, surname } = this.props.info;
    return (
      <>
        <h1>{name}</h1>
        <h1>{surname}</h1>
        <div>{ this.state.value }</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <img src="./images/icon-delete.JPG"/>
      </>
    );
  }

  handleIncrement = () => this.setState({ value: this.state.value + 1 });

  handleDecrement = () => this.setState({ value: this.state.value - 1 });
 
}
