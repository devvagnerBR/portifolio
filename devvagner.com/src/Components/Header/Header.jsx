import React from 'react'
import Button from '../Button/Button'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header__container}>
            <section className={styles.header__logo}>
                <h3>DE<span>VV</span>.</h3>
            </section>
            <section className={styles.header__links}>
                <a href="#">Contato</a>
                <a href="#">Projetos</a>
                <a href="#">Sobre Mim</a>
            </section>
            <section>
                <Button color={`button__red`}>Currículo</Button>
            </section>
        </header>
    )
}

export default Header