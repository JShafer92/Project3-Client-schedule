import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/components/Form";
import { Col, Row, Container } from "../../components/components/Grid";
import Jumbotron from "../../components/components/Jumbotron";



//create a form to submit time

class Dropdown extends Component {
  

    render() {
        return (
         
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What time would you like to schedule?</h1>
                        </Jumbotron>
                        <form>
                            <Input name="Time" placeholder="Time (required)" />
                            <Input name="customerName" placeholder="Customer Name (required)" />
                            {/* <TextArea name="contact" placeholder="Synopsis (Optional)" /> */}
                            <FormBtn>Submit Appointment</FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dropdown;
