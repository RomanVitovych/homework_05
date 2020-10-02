import React, { Component } from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import AlertMessage from '../AlertMessage/AlertMessage';
import { v4 as uuidv4 } from 'uuid';

class Book extends Component {
    state = {
        contacts: [
            { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
            { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
            { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
            { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
        ],
        filter: '',
        alert: false,
    }

    addName = (name, number) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        const chekContact = this.state.contacts.find(
            contact => contact.name === name
        );
        if (!chekContact) {
            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, contact]
                }
            })
        }   else {
            // alert(`Contact already exists!`)
            this.setState({alert: true})
            setTimeout(() => {this.setState({alert: false})}, 5000) 
        };
    };

    getVisibleContacts = () => {
        const {contacts, filter} = this.state;
        return (contacts.filter (contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase())))
    };

    removeName = (contactId) => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({id}) => id !== contactId)
            }
        });   
    };

    changeFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {filter, alert} = this.state;
        const visibleContacts = this.getVisibleContacts()
        return (
            <>
                <AlertMessage alert={alert} />              
                <ContactsForm onAddName={this.addName} />
                <Filter value={filter} onChangeFilter={this.changeFilter} />
                <ContactsList contacts={visibleContacts} onRemoveName={this.removeName} />
            </>
        );
    }
}

export default Book;