import React, {Component} from 'react';
import NavBar from './NavBar';
import InputData from './InputData';
import List from './List';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {list: []}
        this.getList = this.getList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    getList(list)
    {
        return this.setState({
            list: list
        });
    }

    deleteItem(item)
    {
        const list = this.state.list;
        const index = list.indexOf(item); 
        if ( index > -1) {
            list.splice(index, 1); 
            return this.setState({
                list: list
            });
        }
    }

    render() {
        return(
            <div>
                <NavBar />
                <br></br>
                <div className="container">
                    <InputData list={this.getList}/>
                    <br></br>
                    <List data={this.state.list} remove={this.deleteItem}/>
                </div>
            </div>
        );
    }


}

export default Main;