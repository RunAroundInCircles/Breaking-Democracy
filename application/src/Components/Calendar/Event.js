import React,{Component} from 'react';
import {Link, useParams} from "react-router-dom";

class Event extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {//Handles a click event on a event
        e.preventDefault(); //Prevent default behavior
        alert(this.state.message);
    }

    render() {

        let route = "/Calendar/" + this.props.id;
        return (
            <Link to={route}>{this.props.message}</Link>
        );
    }
}

export default Event;
