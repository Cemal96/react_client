var React = require('react');
var SignOutLink = require('./auth/SignOutLink.react.jsx');

var Navbar = React.createClass({
  render() {
    var signed_in = false;
    $.ajax({
        beforeSend: function(request) {
          var token = localStorage.getItem('current_user_token');
            request.setRequestHeader("Authorization", token);
        },
        type: "GET",
        dataType: 'json',
        url: 'http://localhost:3000/auth/is_signed_in',
        success: function(response) {
          signed_in = response.signed_in
        },
        async: false 
    });

    if (this.props.current_user.signed_in) {
      return(
        <li className="collection-header">
        <div className="row">
          <div className="col s11">
          <span className="title flow-text">Contact Manager</span>
          </div>
          <div className="col s1">
          <SignOutLink />
          </div>
        </div>
        </li>
      )
    } else {
      return(
        <li className="collection-header">
        <div className="row">
          <div className="col s10">
          <span className="title flow-text">Contact Manager</span>
          </div>
          <div className="col s1">
          <a onClick={this._openSignUpModal} className="teal darken-1 waves-effect waves-circle waves-light btn-floating">
            <i className="mdi-social-person-add"></i> 
          </a>
          <span>   Sign up</span>
          </div>
          <div className="col s1">
          <a onClick={this._openSignInModal} className="teal darken-1 waves-effect waves-circle waves-light btn-floating">
            <i className="mdi-social-person"></i> 
          </a>
          <span>   Sign in</span>
          </div>
        </div>
        </li>
      );
    }

  },

  _openSignUpModal() {
    $('#signup_modal').openModal();
    // focus on the first field
    $('#signup_modal').find('#email').focus();
  },

  _openSignInModal() {
    $('#signin_modal').openModal();
    // focus on the first field
    $('#signin_modal').find('#email').focus();
  }
});

module.exports = Navbar;