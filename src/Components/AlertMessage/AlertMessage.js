import React from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './AlertMessage.module.css';


const AlertMessage = ({alert}) => {
    return (
        <CSSTransition
        in={alert}
        appear={true}
        timeout={2500}
        classNames={styles}
        unmountOnExit >
            <div className={styles.alert} >
                <p>Contact already exists!</p>
            </div>
        </CSSTransition>
        
    );
};

export default AlertMessage;
