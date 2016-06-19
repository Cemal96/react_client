var React = require('react');

var User = React.createClass({
	render() {
		var user = this.props.user;
		return(
			<li className="collection-item avatar">
			<img src='./1.jpg' className="circle" />
			<span className="title">Email: {user.email}</span>
			<p>Name: Some name <br />
			</p>
			</li>
		);
	}
});
module.exports = User;