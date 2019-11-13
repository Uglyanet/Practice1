import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import ControlForm from '../../components/ControlForm/ControlForm';

class MainPage extends Component {
  render() {
    const { showTypeUsers, type_of_users, friends } = this.props;
    return (
      <div className="App">
        <ControlForm showTypeUsers={showTypeUsers} />
        <Table friends={friends} type_of_users={type_of_users}/>
      </div>
    );
  }
}

export default MainPage;
