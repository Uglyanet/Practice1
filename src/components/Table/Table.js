import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import './Table.css';

class Table extends Component {
    render() {
        const { friends, updateIndex } = this.props;
        let tableTemplate;

        const openCard = () => {
            
            document.location.href = "http://localhost:3000/detail";
        }

        tableTemplate = friends.map((row, i) => {
            return (
                // <Link to="/detail" params={{index: i}}>
                <tr key={i} onClick={() => {
                    openCard();
                    updateIndex(i);
                }}>
                    <td headers="name" >{row.name.first} {row.name.last}</td>
                    <td headers="email" width="150px" >{row.email}</td>
                    <td headers="phone" width="150px" >{row.phone}</td>
                    <td headers="friends" width="150px" >{row.friends.length}</td>
                    <td>{i}</td>
                    {/* <td>{row}</td> */}


                </tr>
                //  </Link>
            )
        })

        return (
            <div className="container_table_buttons">
                <div className="table" >
                    <table id="person_table" align="center">
                        <tbody>
                            <tr>
                                <th id="name" width="149px" >Name</th>
                                <th id="email" width="150px" >Email</th>
                                <th id="phone" width="150px" >Phone</th>
                                <th id="friends" width="150px" >Friends</th>
                            </tr>
                            {tableTemplate}
                        </tbody >
                    </table>
                </div >
            </div>
        )
    }
}
export default Table;