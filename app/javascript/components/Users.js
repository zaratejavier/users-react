import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Users extends React.Component {
  // this is like the initialize method in ruby
  constructor(props) {
    // props are properties that change
    super(props);
    // as things that are in changing our app
    this.state = {
      users: this.props.users,
    };
  }

  deleteUser(id) {
    console.log("delete user clicked");
    console.log(id);
    axios
      .delete(`/users/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const newUsers = this.state.users.filter((user) => {
          return user.id !== id;
        });
        this.setState({
          users: newUsers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderUsers() {
    console.log("render Users");
    const { users } = this.state;
    return users.map((user) => (
      <li key={user.id}>
        {/* this display full name */}
        {`${user.f_name} ${user.l_name}`}
        {/* {delete} */}
        <div onClick={() => this.deleteUser(user.id)}>delete</div>
        {/* link to user show */}
        <a href={`/users/${user.id}`}>show</a>
      </li>
    ));
  }

  addRandomUser = () => {
    console.log("clicked");
    axios
      .post("/users", {
        f_name: "User",
        l_name: Math.floor(Math.random() * 100),
      })
      .then((response) => {
        console.log(response.data);
        const newUser = response.data;
        this.setState({
          users: [newUser, ...this.state.users],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div onClick={this.addRandomUser}>add random user</div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
};
export default Users;