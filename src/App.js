import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import DetailsPage from './pages/DetailsPage/DetailsPage'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type_of_users: 'isActive',
    }
  }

  showTypeUsers = () => {
    this.state.type_of_users==='isActive'?
    this.setState({ type_of_users: 'all' }):this.setState({ type_of_users: 'isActive' })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact render={() => <MainPage showTypeUsers={this.showTypeUsers} type_of_users={this.state.type_of_users}/>}/>} />
            <Route path="/detail" render={() => <DetailsPage />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
