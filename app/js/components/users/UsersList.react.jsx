var React = require('react');
var User = require('./User.react.jsx');

var UsersList = React.createClass({
  render() {
    var users=[];
    for (user in this.props.data) {
      users.push(<User user={this.props.data[user]} />);
    }
    return(<ul>{users}</ul>);
  }
});
module.exports = UsersList;