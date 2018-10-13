import React, { Component } from 'react';
import 'whatwg-fetch';
import {
    getFromStorage,
    setInStorage,
} from './utils/storage';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
        };
        this.handleHide = this.handleHide.bind(this);
        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    }
    handleHide() {
        this.setState({ show: false });
    }
    handleShow() {
        console.log("YOU CLICKED ON THE MODAL BUTTON");
        console.log('State : ', this.state);
        this.setState({ show: !this.state.show });
    }
    componentDidMount() {
        const token = getFromStorage('the_main_app')
        if (token) {
            //verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });

        } else {
            this.setState({
                isLoading: false,
            });
        }
    }
    onTextboxChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value,
        });
    }
    onTextboxChangeSignInPassword(event) {
        this.setState({
            signInPassword: event.target.value,
        });
    }
    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }
    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }
    onTextboxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value,
        });
    }
    onTextboxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value,
        });
    }

    render() {

        const {
            isLoading,
            token,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }
        if (!token) {
            return (
                <div>
                    <button
                        style={{ background: '#428bca', width: '100px', height: '50px', border: 'none', borderRadius: 5, color: 'white' }}
                        onClick={() => {
                            this.handleShow()
                        }}>
                        Login
                    </button>
                    <div>
                    <button>Sign Up</button>
                    </div>
                    <br />
                    <div>
                        <input
                            type='email'
                            placeholder='Email Or phone number'
                            value={signInEmail}
                        /><br />
                        <input
                            type='password'
                            placeholder='Password'
                            value={signInPassword}
                        />
                        <button>Sign In</button>
                    </div>

                </div>
            );
        }
        return (
            <div>
                <p>Account</p>
            </div>
        )
    }
};

export default Login;