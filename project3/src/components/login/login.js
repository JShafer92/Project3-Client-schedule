import React, { Component } from 'react';
import 'whatwg-fetch';
// import "../../SCSS/input.css";

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
            signUpEmail: '',
            signUpPassword: '',
        };

        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
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

    onSignUp() {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
            signUpFirstName,
            signUpLastName
        } = this.state;

        this.setState({
            isLoading: true,
        });

        // Post request to backend
        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: signUpFirstName,
                lastName: signUpLastName,
                email: signUpEmail,
                password: signUpPassword,
            }),
        })
            // .then(res =>{
            //     console.log(res, 'this is res')
            //     return res.json
            // })
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpFirstName: '',
                        signUpLastName: ''
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    onSignIn() {
        // Grab state
        const {
            signInEmail,
            signInPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        // Post request to backend
        fetch('/api/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword,
            }),
        }).then(res => res.json)
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    setInStorage('the_main_app', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInPassword: '',
                        signInEmail: '',
                        token: json.token,
                    });
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        show:false
                    });
                }
            });
    }

    logout() {
        this.setState({
            isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    handleHide() {
        this.setState({ show: false });
    }
    handleShow() {
        console.log("YOU CLICKED ON THE MODAL BUTTON");
        // console.log('State : ', this.state);
        this.setState({ show: !this.state.show });
    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpEmail,
            signUpFirstName,
            signUpLastName,
            signUpPassword,
            signUpError,
        } = this.state;

        // console.log("Current State : ", this.state);
        let display = this.state.show ? 'block' : 'none';

        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }

        if (!token) {
            return (
                <div>
                    <button
                        style={{ background: '#ff7f00', width: '100px', height: '50px',  borderStyle:'thin', borderRadius: 5, color: 'bisque' }}
                        onClick={() => {
                            this.handleShow()
                        }}>
                        Login
                    </button>
                    <div  style={{display, background:'bisque', width: '400px', borderRadius:'18px', height: '500px',right:'30px', position:'absolute', zIndex: '1000', border: '5px solid #f1972f', }}>
                    <div style={{textAlign: 'center'}}>
                        {
                            (signInError) ? (
                                <p>{signInError}</p>
                            ) : (null)
                        }
                        <p>Sign In</p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={signInEmail}
                            onChange={this.onTextboxChangeSignInEmail}
                        />
                        <br></br>
                        <br></br>
                        <input
                            type="password"
                            placeholder="Password"
                            value={signInPassword}
                            onChange={this.onTextboxChangeSignInPassword}
                        />
                        <br />
                        <br></br>
                        <button onClick={this.onSignIn}>Sign In</button>
                    </div>
                    <br />
                    <div style={{textAlign: 'center'}}>
                        {
                            (signUpError) ? (
                                <p>{signUpError}</p>
                            ) : (null)
                        }
                        <p>Sign Up</p>
                        <input 
                            type="firstName"
                            placeholder="First Name"
                            value={signUpFirstName}
                            onChange={this.onTextboxChangeSignUpFirstName}
                        /><br />
                        <br></br>
                        <input
                            type="lastName"
                            placeholder="Last Name"
                            value={signUpLastName}
                            onChange={this.onTextboxChangeSignUpLastName}
                        /><br />
                        <br></br>
                        <input
                            type="email"
                            placeholder="Email"
                            value={signUpEmail}
                            onChange={this.onTextboxChangeSignUpEmail}
                        /><br />
                        <br></br>
                        <input
                            type="password"
                            placeholder="Password"
                            value={signUpPassword}
                            onChange={this.onTextboxChangeSignUpPassword}
                        /><br />
                        <br></br>
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </div>
                    </div>

                </div>
            );
        }

        return (
            <div>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Login;


