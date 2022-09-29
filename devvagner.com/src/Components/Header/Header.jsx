import React from 'react'
import styles from './Header.module.css'
import linkedin from '../../Assets/icons8-linkedin-circled-500.png'
import github from '../../Assets/icons8-github-512.png'

const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.header_left}>
                <h4>DE<span>VV</span></h4>
            </div>
            <div className={styles.header_middle}>
                <h4>CONTATO</h4>
                <h4>PROJETOS</h4>
                <h4>HABILIDADES</h4>
            </div>
            <div className={styles.header_right}>
                <div className={styles.header_right_language}>
                    <h5> PT | ENG</h5>
                </div>
                <div className={styles.header_right_social}>
                    <img src={linkedin} alt="in" />
                    <img src={github} alt="git" />
                </div>
            </div>
        </header>
    )
}

export default Header