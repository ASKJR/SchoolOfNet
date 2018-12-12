import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsValidation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>                
                <h1> {this.props.age} </h1>
                <h1> {this.props.height} </h1>
            </div>
        );
    }
}

PropsValidation.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
}

PropsValidation.defaultProps = {
    name: 'Katooo',
    age: 25
}

export default PropsValidation;