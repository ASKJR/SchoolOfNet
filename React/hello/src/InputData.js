import React, {Component} from 'react';

class InputData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txts: '',
            txtsArr: []
        }
        this.listenToInputTxt = this.listenToInputTxt.bind(this);
        this.addDataToArr = this.addDataToArr.bind(this);   
    }

    listenToInputTxt(e)
    {
        return this.setState({
            txts: e.target.value
        })
    }

    addDataToArr(e)
    {
        if (!this.state.txts) {
            return;
        }
        this.state.txtsArr.push(this.state.txts);
        this.setState({
            txts: ''
        })
        this.props.list(this.state.txtsArr);
    }

    render() {
        return  (
            <div className="col-md-12">
                <div className="form-group">
                    <label className="sr-only" for="">label</label>
                    <input type="text" className="form-control" id="" placeholder="Input field" value={this.state.txts}
                    onChange={this.listenToInputTxt} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.addDataToArr}>Submit</button>
            </div>
        );
    }

}

export default InputData;