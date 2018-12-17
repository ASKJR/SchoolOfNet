import React, {Component} from 'react';


class HelloRedux extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.sayHello();
    }

    render() {
        const { data } = this.props.msg;
        return(
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
                <h1>{ data }</h1>
                <p>teste</p>
            </div>
        );
    }
}

export default HelloRedux;