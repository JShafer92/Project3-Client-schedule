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
        this.setState({show:true});
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
      return (
        <div className="modal-container" >
           <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() =>{
                this.handleShow()
            }}
          >
            Login
          </Button>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            animation={false}
            aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
    }
  }
  
export default AuthModal;