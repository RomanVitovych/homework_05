import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styles from './ContactsList.module.css';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

const ContactsList = ({contacts, onRemoveName}) => {
    return (
        <TransitionGroup 
        component='ul' 
        className={styles.contactsList} >
                {contacts.map(({name, id, number}) => 
                <CSSTransition 
                key={id}
                timeout={250}
                classNames={styles} >
                    <ContactsListItem
                    name={name}                   
                    number={number}
                    onRemove={() => onRemoveName(id)} />
                </CSSTransition>
                )}
        </TransitionGroup>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        id: PropTypes.string,
        number: PropTypes.string,
    }))
}

export default ContactsList;