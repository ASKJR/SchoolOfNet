import React, { Component } from 'react';
import StateInput from './StateInput';


class HelloWorld extends Component {
    constructor(props) {
        //immutable
        super(props);

        //console.log(props, this.props);
        //!immutable. you can change by using this.setState({})
        this.state = {
            name: 'ASKJR',
            msg: this.props.msg
        }
    }
    render() {
        const result = 4;
        const style = {
            color: '#61dafb',
            fontSize: 50,
            backgroundColor: '#f000000'
        }
        return (
            <div className="HelloWorld-hello">
                <StateInput />
                <h1 style={style}>{this.state.msg}</h1>
                <h4>{ result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div> }</h4>
                <span>{this.state.name}</span>
            </div>
        );
    }
}

export default HelloWorld;
