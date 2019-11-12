import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import friends from '../../data/friends.json';

class DetailsPage extends Component {
    render() {
        const { index_of_user } = this.props;
        return (
            <div>
                <Link to="/">Back2Back</Link>
                <p>{index_of_user}</p>
                {/* <p>{friends[index_of_user]["email"]}</p> */}
            </div>
        )
    }
}

export default DetailsPage;
