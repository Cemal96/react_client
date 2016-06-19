var React = require('react');

var User = React.createClass({
	delete: function(){
		if (localStorage.getItem('current_user_token') == this.props.user.token) {}
      $.ajax({
        url: "http://localhost:3000/user_delete",
        type: 'POST',
        dataType: 'json',
        traditional: true,
        data: {"_method":"delete", "id" : this.props.user.id}
      }).done(function(){
        location.reload();
      });
    },

	render() {
		var user = this.props.user;
		return(
			<li className="collection-item avatar">
			<img src='./1.jpg' className="circle" />
			<span className="title">Email: {user.email}</span>
			<p>Name: Some name <br />
			</p>
			<a href="#" className="secondary-content" onClick={this.delete}><i className="mdi-navigation-close"></i> </a>
			</li>
		);

	}
});
module.exports = User;