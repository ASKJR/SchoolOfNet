import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);

		this.state = {data: this.props.data}
	}


	deleteItem(item)
	{
		this.props.remove(item);
	}


    render() {
		const itens = this.props.data.map( item => <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>{item}
			<span className="badge badge-danger badge-pill" onClick={this.deleteItem.bind(this, item)}>Delete</span>
		</li>);
        return(
           <div className="col-md-12">
				<ul className="list-group">
					{itens}
				</ul>
           </div>    
        );
    }


}

export default List;