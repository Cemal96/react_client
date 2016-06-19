var React = require('react');

/*
 * Show Add button and Program header
 */
var Navbar = React.createClass({
	render() {
		var kvak = false;
		$.ajax({
		    beforeSend: function(request) {
		        request.setRequestHeader("Authorization", localStorage.getItem('current_user_token'));
		    },
		    type: "GET",
		    dataType: 'json',
		    url: 'http://localhost:3000/auth/is_signed_in',
		    success: function(response) {
		    }
		});
		console.log(kvak);
		if (false) {
			return(
				<h1>pisun</h1>
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