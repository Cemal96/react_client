var React     = require('react');
var Functions = require('../../utils/Functions.js');
 
var SignOutLink =
  React.createClass({
    render:function(){
      return (
        <a href="#" onClick={this._signOut}>Sign out</a>
      )
    },
    _signOut: function(){
      var token = localStorage.getItem('current_user_token');
      $.ajax({
        url: "http://localhost:3000/sessions",
        type: 'POST',
        dataType: 'json',
        traditional: true,
        data: {"_method":"delete", "auth_token" : localStorage.getItem('current_user_token')}
      }).done(function(){
        location.reload();
      });
    }
  });
module.exports = SignOutLink;
