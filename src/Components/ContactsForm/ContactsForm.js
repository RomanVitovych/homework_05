import React, { Component } from 'react';
import styles from './ContactsForm.module.css';

class ContactsForm extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
        name: '',
        number: '',
    }

    handlerChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    handlerSubmit = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        this.props.onAddName(name, number);
        this.setState({name: '', number: ''});
    };

    render() {
        const {name, number} = this.state;
        return (
            <form 
            className={styles.phoneBookForm}
            onSubmit={this.handlerSubmit} >
                <label>
                    <p 
                    className={styles.phoneBookName} >
                         Name</p>
                    <input
                    className={styles.inputName}
                    placeholder=''
                    type='text'
                    value={name}
                    onChange={this.handlerChange}
                    name='name'
                    required />
                    <p 
                    className={styles.phoneBookNumber} >
                         Number</p>
                    <input
                    className={styles.inputNumber}
                    placeholder=''
                    type='number'
                    value={number}
                    onChange={this.handlerChange}
                    name='number'
                    // pattern='[0-9]{3}[ -][0-9]{2}[ -][0-9]{2}' 
                    required />
                </label>
                <br />
                <button 
                className={styles.button}
                type='submit' >
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactsForm;