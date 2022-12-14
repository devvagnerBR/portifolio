import React from 'react'
import styles from './Button.module.css'

const Button = ( { children, color, ...props } ) => {
    return (
        <button className={` ${styles[color]}`} {...props}>{children}</button>
    )
}

export default Button