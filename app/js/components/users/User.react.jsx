var React = require('react');

var User = React.createClass({
	render() {
		var user = this.props.user;
		return(
			<li className="collection-item avatar">
			<img src='./1.jpg' className="circle" />
			<span className="title">{user.auth_token}</span>
			<p>Phone Number:  <br />
			Email: {user.email}
			</p>
			</li>
		);
	}
});
module.exports = User;