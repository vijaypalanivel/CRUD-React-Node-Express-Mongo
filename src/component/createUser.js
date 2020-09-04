import React, { Component } from 'react'
import { createUser } from '../service/userService';
import { Formik } from 'formik'
import * as Yup from 'yup';


export class CreateUser extends Component {

    state = {
        userdetils: {
            FName: '',
            LName: '',
            UName: ''
        }
    }

    validationSchema = Yup.object({
        FName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('Firstname is Required'),
        LName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(3, 'Must be 3 characters or more')
            .required('Lastname is Required'),
        UName: Yup.string()
            .required('Username is Required')
            .min(3, 'Must be 3 characters or more')
            .max(15, 'Must be 15 characters or less')
    })

    componentDidMount() {
    }

    render() {

        const handlesumbit = () => {

            createUser(this.state.userdetils)
                .then(response => {
                    alert("created sucessfully");
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
                <Formik
                    initialValues={{ FName: '', LName: '', UName: '' }}
                    validationSchema={this.validationSchema}>
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-group">
                                <label for="FName">First Name</label>
                                <input
                                type="text"
                                name="FName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.FName}
                            />
                            <small id="emailHelp" className="form-text error">{props.errors.FName && props.touched.FName && props.errors.FName}</small>
                            </div>
                          

                            <div className="form-group">
                                <label for="LName">Last Name</label>
                                <input
                                type="text"
                                name="LName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.LName}
                            />
                            <small id="emailHelp" className="form-text error">{props.errors.LName && props.touched.LName && props.errors.LName}</small>
                            </div>

                            <div className="form-group">
                                <label for="UName">User Name</label>
                                <input
                                type="text"
                                name="UName"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.UName}
                            />
                            <small id="emailHelp" className="form-text error"> {props.errors.UName && props.touched.UName && props.errors.UName}</small>
                            </div>
                            <button type="submit" disabled={props.isSubmitting} className="btn btn-primary">
                                Submit
                         </button>
                            <pre>{JSON.stringify(props.values)}</pre>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default CreateUser