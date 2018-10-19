import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";

class Appoints extends Component {
    state = {
        appoints: []
    };

    componentDidMount() {
        this.loadAppoints();
    }

    loadAppoints = () => {
        API.getAppoints()
            .then(res => this.setState({ appoints: res.data }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <List>
                {this.state.appoints.map(appoint => (
                    <ListItem key={appoint._id}>
                        <a href={"/appoints" + appoint._id}>
                            <strong>
                                {appoint.Time} by {appoint.customerName}
                            </strong>
                        </a>
                        <DeleteBtn />
                    </ListItem>
                ))}
            </List>
        )
    }
}

export default Appoints;