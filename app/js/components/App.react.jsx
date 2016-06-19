var React = require('react');
var Navbar = require('./Navbar.react.jsx');
var SignUpModal = require('./auth/SignUpModal.react.jsx');
var SignInModal = require('./auth/SignInModal.react.jsx');
var SignOutLink = require('./auth/SignOutLink.react.jsx');
var UsersList = require('./users/UsersList.react.jsx');

var App = React.createClass({
	getInitialState() {
		return { users: [] }
	},

	componentDidMount() {
		$.getJSON('http://localhost:3000/users.json', (response) => { this.setState({ users: response }) });
	},

	handleSubmit(user) { 
		var newState = this.state.users.concat(user); 
		this.setState({ users: newState }); 
	},

	render() {
		var token = localStorage.getItem('current_user') || [];
		console.log(token);
		return (
			<div>
			    <ul className="collection">
					<Navbar/>
					<UsersList data={this.state.users} />
					<SignUpModal handleSubmit={this.handleSubmit} />
					<SignInModal />
				</ul>
				<SignOutLink />
			</div>
		)
	}
});
module.exports = App;