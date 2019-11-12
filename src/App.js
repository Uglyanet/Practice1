import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import DetailsPage from './pages/DetailsPage/DetailsPage'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index_of_user: "",
    }
  };

  updateIndex = (value) => {
    this.setState({ index_of_user: value })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact render={()=><MainPage  updateIndex={()=>{this.updateIndex(this.state.index_of_user)}}/>} />
            <Route path="/detail" render={()=><DetailsPage index_of_user={this.state.index_of_user}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
