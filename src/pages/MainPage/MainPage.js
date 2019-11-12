import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import friends from '../../data/friends.json';
import ControlForm from '../../components/ControlForm/ControlForm';

class MainPage extends Component {
  render() {
    const {index_of_user, updateIndex} = this.props;
    return (
      <div className="App">
        <ControlForm />
        <Table friends={friends} index_of_user={index_of_user} updateIndex={()=>updateIndex(index_of_user)}/>
      </div>
    );
  }
}

export default MainPage;
