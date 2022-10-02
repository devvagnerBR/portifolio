import React from 'react'
import useMedia from '../../Hooks/useMedia'
import Button from '../Button/Button'
import styles from './Header.module.css'

const Header = () => {

    // const mobile = useMedia( '(max-width: 870px)' )
    // console.log( mobile );
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

                <section className={styles.header__button}>
                    <Button color={`button__red`}>Currículo</Button>
                </section>

            </header >


    )
}

export default Header