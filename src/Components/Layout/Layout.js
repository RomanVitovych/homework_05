import React from 'react';
import styles from './Layout.module.css';
import Header from '../Header/Header';

const Layout = ({children}) => {
    return (
        <div className={styles.layoutMain} >
            <Header/>
            <hr className={styles.line} />
            {children}
            <hr className={styles.line} />
        </div>
    );
};

export default Layout;