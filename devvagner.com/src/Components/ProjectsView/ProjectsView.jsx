import React from 'react'
import BlackButton from '../BlackButton/BlackButton'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsView.module.css'

const ProjectsView = () => {
    return (
        <div className={styles.projects_view_container}>
            <section className={styles.project_text_one}>
                <h1>PROJETOS</h1>
                <p>Confira alguns dos meus projetos profissionais e pessoais. <br /> Caso tenha alguma  pergunta, fique a vontade para perguntar </p>
            </section>
            <div className={styles.project_card_container}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className={styles.see_more}>
                    <BlackButton>Ver mais projetos</BlackButton>
                </div>
        </div>
    )
}

export default ProjectsView