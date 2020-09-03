import React, { Component } from 'react'
import { getUser, deleteUser } from '../service/userService'
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';


import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Users extends Component {

    state = {
        users: [],
        userdetils: {}
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {

        getUser().then(response => {
            this.setState({ users: response.data })
        })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        const handledelete = (user) => {

            deleteUser(user._id)
                .then(response => {
                    alert("deleted sucessfully");
                    this.getUsers();
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

        return (
            <div className='col-md-12 margin-100'>


                <div className='col-md-10'>
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.FName}</td>
                                    <td>{user.LName}</td>
                                    <td>{user.UName}</td>
                                    <td>
                                        <Link to={"/edit/" + user._id} className="btn btn-warning btn-sm"> Edit</Link>
                                        <Button variant="primary" className='margin-10' type="button" onClick={(e) => handledelete(user)} >
                                            Delete</Button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </Table>

                    <Link to={"/create"} className="btn btn-warning btn-sm">
                        Add New User
                    </Link>
                </div>
            </div>
        )
    }
}

export default Users