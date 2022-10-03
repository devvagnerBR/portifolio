import React from 'react'
import styles from './ProjectCard.module.css'
import PROONE from '../../Assets/p1.png'
import Button from '../Button/Button'


const ProjectCard = () => {
    return (
        <div className={`${styles.project_card__container} ${styles.container__}`}>
            <div className={styles.project_card__img}>
                <img src={PROONE} alt="" />
            </div>

            <section className={styles.project_card__tec_info}>
                <h4>devvagner.com</h4>
                <p>Tecnologías: <span> HTML | CSS | REACT.JS </span></p>
            </section>

            <div className={styles.project_card__buttons}>
                <Button color={`button__view_red`} >LINK</Button>
                <Button color={`button__view_dark`} >GITHUB</Button>
            </div>


        </div>
    )
}

export default ProjectCard


