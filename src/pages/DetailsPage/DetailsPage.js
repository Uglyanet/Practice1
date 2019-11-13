import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import friends from '../../data/friends.json';

class DetailsPage extends Component {
    render() {
        const orco = () => {
            localStorage.setItem("num_of_user", null);
        }
        const num_of_user = localStorage.getItem("num_of_user");
        return (
            <div>
                <Link to="/" onClick={orco}>Back2Back</Link>
                <h1>{num_of_user}</h1>
                <p>{friends[num_of_user]['name']['first']} {friends[num_of_user]['name']['last']}</p>
                <p>{friends[num_of_user]["email"]}</p>
                <p>{friends[num_of_user]["phone"]}</p>
                <p>{friends[num_of_user]["age"]}</p>
                <p>{friends[num_of_user]["company"]}</p>
                {friends[num_of_user]['friends'].map((row, i) => {
                    return (
                        <p key={i} >
                            {row['name']}
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default DetailsPage;
