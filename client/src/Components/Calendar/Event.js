import React,{Component} from 'react';

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            message: props.message
        }
    }

    render() {
        return (
            <div className="event" date={this.state.date} id={this.state.id}>
                {this.state.message}
            </div>
        );
    }
}

export default Event;