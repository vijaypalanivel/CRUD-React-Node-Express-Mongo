import React, { Component } from 'react'
import { updateUser, getUserById } from '../service/userService'
import { Form, Group, FormControl, Label, FormLabel, FormGroup, Button } from 'react-bootstrap';


export class EditUser extends Component {

    state = {
        userdetils: {
            FName: '',
            LName: '',
            UName: ''
        }
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        getUserById(id)
            .then(response => {
                this.setState({ userdetils: response.data })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    render() {

        const handlesumbit = () => {


            updateUser(this.state.userdetils)
                .then(response => {
                    alert("Updated sucessfully");
                    this.props.history.push('/')
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

        const handlechange = (eve, props) => {

            let user = { ...this.state.userdetils }
            user[props] = eve.target.value;
            this.setState({ userdetils: user });
        }

        return (
            <div className="col-md-8 margin-100">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={(e) => handlechange(e, 'FName')} value={this.state.userdetils.FName} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => handlechange(e, 'LName')} value={this.state.userdetils.LName} />
                    </Form.Group>

                    <Form.Group controlId="formUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" onChange={(e) => handlechange(e, 'UName')} value={this.state.userdetils.UName} />
                    </Form.Group>

                    <div className="pullright">
                        <Button variant="secondary" type="button" onClick={() => this.props.history.push('/')} >
                            Cancel</Button>
                        <Button className="margin-10" variant="primary" type="button" onClick={(e) => handlesumbit()} >
                            Update</Button>
                    </div>


                </Form>
            </div>
        )
    }
}

export default EditUser