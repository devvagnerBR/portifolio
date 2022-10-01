import React from 'react'
import styles from './ProjectCard.module.css'
import PROONE from '../../Assets/p1.png'
import Button from '../Button/Button'


const ProjectCard = () => {
    return (
        <div className={styles.project_card__container}>
            <div className={styles.project_card__img}>
                <img src={PROONE} alt="" />
            </div>

            <h4>devvagnercom</h4>
            <p>Tecnologías: HTML | CSS | REACT.JS</p>
            <div className={styles.project_card__buttons}>
                <Button color={`button__view_red`} >LINK</Button>
                <Button color={`button__view_dark`} >GITHUB</Button>
            </div>


        </div>
    )
}

export default ProjectCard