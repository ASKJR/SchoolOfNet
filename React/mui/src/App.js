import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core'

class App extends Component {
  render() {
    return (
    	<div className="App">
			<AppBar position="static">
				<Toolbar>
					<IconButton></IconButton>
				</Toolbar>
			</AppBar>
			{/* <Button variant="contained" color="primary">Color primary</Button>
			<Button variant="contained" > Color Default </Button> */}
      	</div>
    );
  }
}

export default App;
