// import React, { Component } from 'react';
// import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";
//import { databasething } from 'src';

// const user = ({ id, username }) => (
//     <h1 key={id} >{username}</h1>
// );

// const Auth = ({ data: { allUsers = [] } }) => (
//     <div>
//         {allUsers.map(user)}
//     </div>
// );

// const query =
// {
//     allUsers {
//         id
//       username
//     }
// };
// export default  Auth;
// export default class Login extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.handleHide = this.handleHide.bind(this);
//     this.state = {
//       show: false
//     };

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }
//   handleHide() {
//     this.setState({ show: false });
//   }
//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="modal-container" style={{ height: 200 }}></div>
//       <Modal
//         show={this.state.show}
//         onHide={this.handleHide}
//         container={this}
//         aria-labelledby="contained-modal-title">
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body>
//           <section className="Login">
//             <form onSubmit={this.handleSubmit}>
//               <FormGroup controlId="email" bsSize="large">
//                 <ControlLabel>Email</ControlLabel>
//                 <FormControl
//                   autoFocus
//                   type="email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup controlId="password" bsSize="large">
//                 <ControlLabel>Password</ControlLabel>
//                 <FormControl
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                   type="password"
//                 />
//               </FormGroup>

//               <Button
//                 block
//                 bsSize="large"
//                 disabled={!this.validateForm()}
//                 type="submit"
//                 bsStyle="primary"
//                 bsSize="large"
//                 onClick={() => this.setState({ show: true })}
//               >
//                 Login
//             </Button>
//             </form>
//           </section>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={this.handleHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//       </div
//     );
//   }
// }

