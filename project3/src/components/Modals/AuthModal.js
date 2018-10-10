import React, {Component} from "react";
import { Button, Modal, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
              password: "",
              show : false
            };
    }
  
    handleHide() {
      this.setState({ show: false });
    }
    handleShow(){
        console.log("YOU CLICKED ON THE MODAL BUTTON");
        console.log('State : ', this.state);
        this.setState({show:!this.state.show});
    }
    validateForm() {
            return this.state.email.length > 0 && this.state.password.length > 0;
          }
        
          handleChange = event => {
            this.setState({
              [event.target.id]: event.target.value
            });
          }
        
          handleSubmit = event => {
            event.preventDefault();
          }
    render() {
        console.log("Current State : ", this.state);
        let display = this.state.show ? 'block' : 'none';
      return (
        <div>
           <button
            style={{background: '#428bca' , width: '100px',height:'50px',border:'none',borderRadius:5,color:'white' }}
            onClick={() =>{
                this.handleShow()
            }}
          >
            Login
          </button>
          <div style={{display}}>
            <div class='modal-holder'>
                <div onClick={()=>{
                  this.handleHide();
                }}>HIDE</div>
                <input type='text' placeholder='username'></input>
            </div>
          </div> 
        </div>
      );
    }
  }
  
export default AuthModal;