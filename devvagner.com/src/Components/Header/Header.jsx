import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMedia from '../../Hooks/useMedia'
import { GO_TO_RESUME } from '../../Routers/Navigator'
import Button from '../Button/Button'
import styles from './Header.module.css'

const Header = () => {

    const navigate = useNavigate()
    // const mobile = useMedia( '(max-width: 870px)' )
    // console.log( mobile );
    return (

        <header className={styles.header__container}>

            <section className={styles.header__logo}>
                <a href=""> <h3>DE<span>VV</span>.</h3></a>
            </section>

            <section className={styles.header__links}>
                <a href="contact-me">Contato</a>
                <a href="projects">Projetos</a>
                <a href="resume">Sobre Mim</a>
            </section>

            <section className={styles.header__button}>
                <Button onClick={() => GO_TO_RESUME( navigate )} color={`button__red`}>Currículo</Button>
            </section>

        </header >


    )
}

export default Header