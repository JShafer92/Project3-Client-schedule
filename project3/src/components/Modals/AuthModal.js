// import React, { Component, Button } from "react";
// //import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import './authmodal.css';

// const user = ({ id, username }) => (
//         <h1 key={id} >{username}</h1>
//     );
//     const Auth = ({ data: { allUsers = [] } }) => (
//             <div>
//                 {allUsers.map(user)}
//             </div>
//     );

// class AuthModal extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleHide = this.handleHide.bind(this);

//     this.state = {
//       email: "",
//       emailError: "",
//       password: "",
//       passwordError: "",
//       show: false
//     };

//     change = e => {
//       this.props.onChange({ [e.target.name]: e.target.value });
//       this.setState({
//         [e.target.name]: e.target.value
//       });
//     };

//     validate = () => {
//       let iserror = false;
//       const errors = {
//         emailError: "",
//         passwordError: ""
//       };
//       if (this.state.email.indexOf('@') === -1) {
//         isError = true;
//         errors.emailError = "requires valid email "
//       }
//       this.setState({
//         ...this.state,
//         ...errors
//       });
//       return isError
//     }

//     onSubmit = e => {
//       e.preventDefault();
//       const err = this.validate();
//       if (!err) {
//         this.setState({
//           emailError: "",
//           passwordError: ""
//         });
//         this.props.onChange({
//           email: "",
//           password: ""
//         });
//       }
//     };
//     // handleHide() {
//     //   this.setState({ show: false });
//     // }
//     // handleShow() {
//     //   console.log("YOU CLICKED ON THE MODAL BUTTON");
//     //   console.log('State : ', this.state);
//     //   this.setState({ show: !this.state.show });
//     // }
//     // validateForm() {
//     //   return this.state.email.length > 0 && this.state.password.length > 0;
//     // }

//     // handleChange = event => {
//     //   this.setState({
//     //     [event.target.id]: event.target.value
//     //   });
//     // }

//     // handleSubmit = event => {
//     //   event.preventDefault();
//     // }

//     render(){
//       return (
//       //   console.log("Current State : ", this.state);
//       // let display = this.state.show ? 'block' : 'none';
//       <Form>
//         <div>
//            <button
//             style={{background: '#428bca' , width: '100px',height:'50px',border:'none',borderRadius:5,color:'white' }}
//             onClick={() =>{
//                 this.handleShow()
//             }}>
//             Login
//           </button>
//           <div style={{ display }}>
//             <div class='modal-holder'>

//                 <input type='text' placeholder='username'></input>
//                 <input type='password' placeholder='password'></input>
//                 <br></br>
//                 <button onClick={()=>{
//                   this.handleHide();
//                 }}>Close</button>
//                 <button onClick={()=>{
//                   this.handleSubmit
//                 }}>Login</button>
//             </div>
//           </div>
//         </div>
//       </Form>
//     )};
//   };
// };

// export default AuthModal;

import React from "react";
//import ReactDOM from "react-dom";
import Modal from './Modal.js'
//import {Modal} from 'react-bootstrap';

class AuthModal extends React.Component {
  state = { show: false };

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }
    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');
    
    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }
    }
    this.setState({errors: errors});
    return formIsValid;
  }
  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }
  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
        <fieldset className="fields"><input ref="name" type="text" size="30"
             placeholder="Enter your Name"
             onChange={this.handleChange.bind(this, "name")} 
            value={this.state.fields["name"]}/>
             <span className="error">{this.state.errors["name"]}</span>
          </fieldset>
          <br></br>
          <fieldset className="fields">
            <input refs="email" type="text" size="30" 
            placeholder="Enter your Email" 
            onChange={this.handleChange.bind(this, "email")} 
            value={this.state.fields["email"]}
            />
            <span className="error">{this.state.errors["email"]}</span>
          <br></br>
          </fieldset>
          <button className="btn btn-lg pro" id="submit" value="Submit">Login</button>
        </form>
        </Modal>
        <fieldset>
        <button type="button" onClick={this.showModal}>
          Login
        </button>
        </fieldset>
        
        </main>
    );
  }
}

export default AuthModal;