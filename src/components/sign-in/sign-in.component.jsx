import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  email: '',
                  password:''
            }
      }

      handleSubmit = event => {
            event.preventDefault();

            this.setState({email:'', password:''});
      }


      handleChange = event => {
            const {name, value} = event.target;
            this.setState({ [name] : value });
      }



      render() {
            return (
                  <div className = 'sign-in'>
                        <h1>I already have an account</h1>
                        <span>Sign in with your email and password.</span>
                        <form onSubmit = {this.handleSubmit}>
                              <input name = 'email' type = 'email' 
                                    value = {this.state.email}
                                    onChange = {this.handleChange}
                                    required />
                              <label>Email</label>
                              <input name = 'password' type = 'password' 
                                    value = {this.state.password}
                                    onChange = {this.handleChange}
                                    required />
                              <label>Password</label>
                              <input value = 'Submit Form' type = 'submit' />
                        </form>
                  </div>
            )
      }


}

export default SignIn; 