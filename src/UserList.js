import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    //API取得処理
    axios
      .get("http://localhost:8080/users")
      .then(users => {
        console.log(users);
        this.setState({ users: users.data });
      })
      .catch();
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>first name</th>
              <th>last name</th>
              <th>gender</th>
              <th>age</th>
            </tr>
              {this.state.users.map(user => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            
          </tbody>
        </table>
      </div>
    );
  }
}
