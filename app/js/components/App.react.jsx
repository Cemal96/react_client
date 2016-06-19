var React = require('react');
var Navbar = require('./Navbar.react.jsx');
var SignUpModal = require('./auth/SignUpModal.react.jsx');
var SignInModal = require('./auth/SignInModal.react.jsx');
var UsersList = require('./users/UsersList.react.jsx');

var App = React.createClass({
  getInitialState() {
    return { users: [],
         current_user: null
    }
  },

  componentWillMount() {
    var current_user;
    $.getJSON('http://localhost:3000/users.json', (response) => { this.setState({ users: response }) });
    $.ajax({
        beforeSend: function(request) {
          var token = localStorage.getItem('current_user_token');
            request.setRequestHeader("Authorization", token);
        },
        type: "GET",
        dataType: 'json',
        url: 'http://localhost:3000/auth/is_signed_in',
        success: function(response) {
          current_user = response;
        },
        async: false  
    });
    this.setState({ current_user: current_user });
  },

  // handleSubmit(user) { 
  //   var newState = this.state.users.concat(user); 
  //   this.setState({ users: newState }); 
  // },

  render() {
    //console.log(this.state.current_user);
    return (
      <div>
          <ul className="collection">
          <Navbar current_user={this.state.current_user} />
          <UsersList data={this.state.users} />
          <SignUpModal handleSubmit={this.handleSubmit} />
          <SignInModal />
        </ul>
      </div>
    )
  }
});
module.exports = App;