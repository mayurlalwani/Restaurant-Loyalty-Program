import React, { Component } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';

class App extends Component {

  state = {
    users:[],
  }


  handleSubmit = user =>{
    this.setState({ users: [...this.state.users, user] })
  }
  
  render() {

    const {users} = this.state;
    return (
      <div className="container"> 
      <h1>Restaurant Loyalty Program</h1>
                
                <Form handleSubmit={this.handleSubmit}/>  
        <div className="userCard">
         <Table userData = {users}/>
         </div>
      </div>
    )
  }
}

export default App