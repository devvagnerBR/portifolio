import React from 'react'
import BlackButton from '../BlackButton/BlackButton'
import ButtonWhite from '../WhiteButton/WhiteButton'
import styles from './AboutMe.module.css'


const AboutMe = () => {
    return (
        <div className={styles.aboutme_container}>
            <div className={styles.box}>
                <section className={styles.aboutme_picture}>

                </section>
                <section className={styles.aboutme_description}>

                    <div className={styles.text_one}>
                        <h1>Olá, meu nome é Wagner e sou</h1>
                        <h1>Desenvolvedor Front-end Junior.</h1>
                    </div>
                    <div className={styles.text_two}>
                        <h4>Sou  desenvolvedor Front -end   e moro no Rio de Janeiro, Estudo </h4>
                        <h4>programação a 1 ano e meu foco é  na criação  de websites responsivos</h4>
                        <h4>e utilizando  o que tem de mais avançado em UI/UX Design. </h4>
                    </div>
                    <div className={styles.bottom_btns}>
                        <BlackButton>Currículo</BlackButton>
                        <ButtonWhite>Contato</ButtonWhite>
                    </div>

                </section>
            </div>

        </div>
    )
}

export default AboutMe