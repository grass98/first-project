import React, {Component} from "react";

class InputEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hello world',
      formInputText: 'Hello world 2'
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
    this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnClick() {
    console.log(this.state.mouseClicked);
    // this.setState({
    //   mouseClicked: this.state.mouseClicked + 1
    // })
    this.setState((state) => {
      return {
        mouseClicked: state.mouseClicked + 1
      }
    })
  }

  handleOnMouseDown() {
    this.setState({
      mouseDown: true
    })
  }

  handleOnMouseUp() {
    this.setState({
      mouseDown: false
    })
  }

  handleOnChange(event) {
    this.setState({
      inputText: event.state
    })
  }

  // This is alternative syntax to define function called Public Class Fields. 
  // With this syntax, we don't need to bind the function in constructor.
  handleSubmit = (e) => {
    this.setState({
      formInputTextSubmitted: this.state.formInputText
    })
  }

  render() {
    return (      
      <>
        <section>
          <h3>Mouse events Hahaha:</h3>
          <button
            onClick={this.handleOnClick}
            onMouseDown={this.handleOnMouseDown}
            onMouseUp={this.handleOnMouseUp}
          >
            Click me
          </button>
          <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
          <p>Button clicked: {this.state.mouseClicked}</p>
        </section>
        <section>
          <h3>Input change events:</h3>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleOnChange}
          />
          <p>Input value: {this.state.inputText}</p>
        </section>
        <section>
          <h3>Form Submit events:</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.formInputText}
            />
            <button type="submit">Submit</button>
            <p>Input value: {this.state.formInputText}</p>
            <p>Submitted value: {this.state.formInputTextSubmitted}</p>
          </form>
        </section>
        </>
    )
  }
}

export default InputEvents;