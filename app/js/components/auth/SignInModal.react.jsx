var React = require('react');

var SignInModal = React.createClass({
	handleClick() {
		var form = $('#signin_form');
		var email = form.find('#email').val();
		var password = form.find('#password').val();
		$.ajax({
			url: 'http://localhost:3000/sessions',
			type: 'POST',
			data: { session: { email: email, password: password } },
			success: (user) => {
				localStorage.setItem('current_user_token', user.auth_token);
				location.reload();
			}
		});
	},

	render() {
		return(
			<div id="signin_modal" className="modal">
				<form id="signin_form" onSubmit={this.handleClick}>
					<div className="modal-content">
						<h4>Please sign in</h4>
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

module.exports = SignInModal;