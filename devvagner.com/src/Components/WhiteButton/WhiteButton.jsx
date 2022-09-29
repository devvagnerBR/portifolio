import React from 'react'
import styles from './WhiteButton.module.css'

const ButtonWhite = ( { children, ...props } ) => {
    return (
        <button {...props} className={styles.btn}>{children}</button>
    )
}

export default ButtonWhite