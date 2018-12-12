import React, {Component} from 'react';

class StateInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        setTimeout(() => {
            this.setState({
                name : 'Kato'
            });
        }, 1000);
    }

    render() {
        return (
            <input type="text" name="inputName" value={this.state.name} />
        );
    }


}

export default StateInput;