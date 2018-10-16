import React, { Component, Button } from "react";
//import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import './authmodal.css';

const user = ({ id, username }) => (
  <h1 key={id} >{username}</h1>
);
const Auth = ({ data: { allUsers = [] } }) => (
  <div>
    {allUsers.map(user)}
  </div>
);
// const query =
// {
//     allUsers {
//         id,
//       username
//     }
// };

class AuthModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      show: false
    };

    change = e => {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    validate = () => {
      let iserror = false;
      const errors = {
        emailError: "",
        passwordError: ""
      };
      if (this.state.email.indexOf('@') === -1) {
        isError = true;
        errors.emailError = "requires valid email "
      }
      this.setState({
        ...this.state,
        ...errors
      });
      return isError
    }

    onSubmit = e => {
      e.preventDefault();
      const err = this.validate();
      if (!err) {
        this.setState({
          emailError: "",
          passwordError: ""
        });
        this.props.onChange({
          email: "",
          password: ""
        });
      }
    };
    // handleHide() {
    //   this.setState({ show: false });
    // }
    // handleShow() {
    //   console.log("YOU CLICKED ON THE MODAL BUTTON");
    //   console.log('State : ', this.state);
    //   this.setState({ show: !this.state.show });
    // }
    // validateForm() {
    //   return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    // handleChange = event => {
    //   this.setState({
    //     [event.target.id]: event.target.value
    //   });
    // }

    // handleSubmit = event => {
    //   event.preventDefault();
    // }
    render() {
      return (
      //   console.log("Current State : ", this.state);
      // let display = this.state.show ? 'block' : 'none';
      <Form>
        <div>
          <button
            style={{ background: '#ff7f00', width: '100px', height: '50px', border: 'none', borderRadius: 5, color: 'bisque' }}
            onClick={() => {
              this.handleShow()
            }}
          >
            Login
          </button>
          <div style={{ display }}>
            <div class='modal-holder'>
              <div onClick={() => {
                this.handleHide();
              }}>
                <h2 className="form-header">Sign in</h2><button bsStyle="primary" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button></div><br></br>
              <div>
                onSubmit={this.handleSubmit}>
              <input className="email"
                  type='text'
                  value={this.state.email}
                  name="email"
                  placeholder='Enter your email'
                  onChange={e => this.change(e)}
                  errorText={this.state.emailError}
                ></input>
              </div>
              <div>
                <input className="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={e => this.change(e)}
                  errorText={this.state.passwordError}
                >
                </input>
              </div>
              <Button className="register" bsStyle="primary">Register if new</Button>
              <RaisedButton onClick={e => this.onSubmit(e)} className="submit" bsStyle="primary">Login</RaisedButton>

            </div>
          </div>
        </div>
      </Form>
    )
    }
  }
}

export default AuthModal;