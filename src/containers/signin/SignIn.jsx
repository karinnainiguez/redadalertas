import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm';
import { loginRequest } from '../../modules/auth/actions';

class SignIn extends Component {
  onSubmit(values) {
    this.props.dispatch(loginRequest(values.email, values.password));
  }

  render() {
    return (
      <div className="sign-in" >
        <div className="landing-page">
          <div className="overlay">
            <div className="content">
              <h1>Sign In</h1>
              <SignInForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { state };
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
