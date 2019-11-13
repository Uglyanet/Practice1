import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class ControlForm extends Component {
    render() {
        const{showTypeUsers} = this.props;
        return (
            <div >
                {/* <Link to="/detail">
                <p>More</p>
            </Link> */}
                <input placeholder="Select tag" />
                <input placeholder="Search" />
                <button onClick={showTypeUsers}>Показать всех</button>
            </div>
        );
    }
}

export default ControlForm;
