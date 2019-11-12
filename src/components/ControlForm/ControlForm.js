import React from 'react';
import {Link} from 'react-router-dom';

function ControlForm() {
    return (
        <div >
            <Link to="/detail">
                <p>More</p>
            </Link>
            <input placeholder="Select tag"/>
            <input placeholder="Search"/>
            <button>Показать всех</button>
        </div>
    );
}

export default ControlForm;
