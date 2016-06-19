var React     = require('react');
 
var SignOutLink =
  React.createClass({
    render:function(){
      return (
        <a href="#" className="btn-floating btn-large waves-effect waves-light red" onClick={this._signOut}><i className="mdi-navigation-close

"></i> </a>
      )
    },
    _signOut: function(){
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
