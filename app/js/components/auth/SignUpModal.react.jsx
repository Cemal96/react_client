var React = require('react');

var SignUpModal = React.createClass({
	handleClick() {
		var form = $('#signup_form');
		var email = form.find('#email').val();
		var password = form.find('#password').val();
		var password_confirmation = form.find('#password_confirmation').val();
		$.ajax({
			url: 'http://localhost:3000/users',
			type: 'POST',
			data: { user: { email: email, password: password, password_confirmation: password_confirmation } },
			success: (user) => {
				//this.props.handleSubmit(user);
				location.reload();
			}
		});
		location.reload();
	},

	render() {
		return(
			<div id="signup_modal" className="modal">
				<form id="signup_form" onSubmit={this.handleClick}>
					<div className="modal-content">
						<h4>Please sign up</h4>
						<div className="input-field">
							<i className="mdi-communication-email prefix"></i>
							<input id="email" type="email" className="validate" />
							<label for="icon_email">Email</label>
						</div>
						<div className="input-field">
							<i className="mdi-communication-vpn-key prefix"></i>
							<input id="password" type="password" className="validate" />
							<label for="icon_password">Password</label>
						</div>
						<div className="input-field">
							<i className="mdi-communication-vpn-key prefix"></i>
							<input id="password_confirmation" type="password" className="validate" />
							<label for="icon_password_confirm">Password confirmation</label>
						</div>
					</div>
					<input type="submit" className="hidden-btn"/>
				</form>

				<div className="modal-footer">
					<a onClick={this.handleClick} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
				</div>
			</div>
		);
	}
});

module.exports = SignUpModal;