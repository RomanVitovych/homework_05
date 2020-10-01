import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({value, onChangeFilter}) => {
    return (
        <div className={styles.filterForm} >
            <p className={styles.filterTitle} >
                Find contacts by name
            </p>
            <input
            className={styles.filterInput}
            placeholder=''
            type='text'
            value={value}
            onChange={e => onChangeFilter(e.target.value)} />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
}

export default Filter;