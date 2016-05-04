import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        { this.props.users.map((user) => { return this.renderUser(user); }) }
      </div>
    );
  }

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps, actions)(UserList);


