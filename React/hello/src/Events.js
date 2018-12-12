import React, {Component} from 'react';

class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            data: []
        }

        this.updateInputName = this.updateInputName.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }
    
    updateInputName(e) {
        return this.setState({
            name: e.target.value
        });
    }

    clickEvent(e) {
        this.state.data.push(this.state.name);
        return this.setState({
            name: ''
        })
    }

    deleteEvent(item) {
        const d = this.state.data;
        if (d.indexOf(item) > -1) {
            d.splice(d.indexOf(item),1);
        }
        return this.setState({
            data: d
        });
    }


    render() {
        const itens = this.state.data.map((value) => {
            return <li key={value}> 
                {value.toString()} - <button type="button" onClick={this.deleteEvent.bind(this,value)}>Delete</button> 
            </li>
        });
        return (
            <div>
                <input type="name" name="name" value={ this.state.name } onChange={this.updateInputName}/>
                <button type="submit" onClick={this.clickEvent}> Submit </button>
                <ul>
                    {itens}
                </ul>
            </div>
        );
    }

}

export default Events;