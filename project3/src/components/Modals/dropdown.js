import React, { Component } from "react";


//create a form to submit time

class Dropdown extends Component {
    constructor(props, context) {
        super(props, context);

        // this.handleHide = this.handleHide.bind(this);

    }
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="input-group bootstrap-timepicker timepicker">
                <input id="timepicker1" type="text" className="form-control input-small" />
                <span className="input-group-addon">
                    <i className="glyphicon glyphicon-time"></i>
                </span>
                <button onClick={() => {
                    this.handleSubmit
                }}>Sumbit Time</button>
            </div>
        );
    }
}

export default Dropdown;
