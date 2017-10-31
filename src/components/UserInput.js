import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    console.log(event.target.value);
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        Username<input type='text' label='username' onChange={this.handleUsernameChange}/>
        Hometown<input type='text' label='hometown' onChange={this.handleHometownChange}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
