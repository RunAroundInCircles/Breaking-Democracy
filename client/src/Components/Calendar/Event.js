import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            message: props.message,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        alert(this.state.message);
    }

    render() {
        let route = "/Calendar/" + this.state.id;
        return (
            <Link to={route}>{this.state.message}</Link>
        );
    }
}

export default Event;