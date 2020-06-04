import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.user.f_name}
        {this.props.user.l_name}
        <a href='/'>go back</a>
      </React.Fragment>
    );
  }
}

User.propTypes = {
  user: PropTypes.object
};
export default User
