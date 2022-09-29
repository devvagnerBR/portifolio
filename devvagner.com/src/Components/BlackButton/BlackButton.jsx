import React from 'react'
import styles from './BlackButton.module.css'

const BlackButton = ( { children, ...props } ) => {
    return (
        <button {...props} className={styles.btn}>{children}</button>
    )
}

export default BlackButton