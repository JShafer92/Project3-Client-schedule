import React, { Component } from "react";


//create a form to submit time

class Dropdown extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

    }
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div class="input-group bootstrap-timepicker timepicker">
                <input id="timepicker1" type="text" class="form-control input-small" />
                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                <button onClick={() => {
                    this.handleSubmit
                }}>Sumbit Time</button>
            </div>
        );
    }
}

export default Dropdown;
