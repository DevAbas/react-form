import React, { Component } from 'react';
import FormFields from './Widgets/Forms/formFields';
import { firebaseDB } from '../firebase';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'LastName',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                validation: {
                    required: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    rows: 4,
                    cols: 36
                }
            },
            age: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age_input',
                    rows: 4,
                    cols: 36,
                    options: [
                        { value: 1, text: '10-20' },
                        { value: 2, text: '20-30' },
                        { value: 3, text: '30+' }
                    ]
                }
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
        }

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid) {
            firebaseDB.ref('users').push(dataToSubmit)
                .then(() => {
                    console.log('saved to db')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData} 
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)} 
                    />
                    <button type="submi">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;