import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import styles from './HomePage.module.css'
import LINKEDIN from '../../Assets/in.svg'
import GITHUB from '../../Assets//github.svg'
import ProjectCard from '../../Components/Project Card/ProjectCard'
import { useNavigate } from 'react-router-dom'
import { GO_TO_PROJECTS, GO_TO_RESUME } from '../../Routers/Navigator'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.homepage__container}>
            <Header />
            <div className={styles.homepage__infos}>

                <section id='about-me' className={styles.homepage__aboutme_left}>
                    <div className={styles.homepage__aboutme_left_text}>

                        <h2 className={styles.text1}>Olá, eu sou o</h2>
                        <h2 className={styles.text2}>Wagner Guimarães</h2>
                        <h4 className={styles.text3}>Desenvolvedor Front-End</h4>


                        <section className={styles.homepage__aboutme_left_buttons}>
                            <Button onClick={() => GO_TO_RESUME( navigate )} color={`button__red`} >Currículo</Button>
                            <Button onClick={() => GO_TO_PROJECTS( navigate )} color={`button__dark`}>Projetos</Button>
                        </section>
                    </div>
                </section>
                <section className={styles.homepage__aboutme_right}>
                    <div className={styles.homepage__aboutme_right_text}>
                        <h3>Sou um desenvoledor <span>Front-End</span></h3>
                        <h3>com foco no  <span>desenvolvimento web </span> e</h3>
                        <h3>apaixonado por <span>UI | UX Design</span>. Moro</h3>
                        <h3>atualmente no Rio de Janeiro/BR,</h3>


                        <section className={styles.homepage__aboutme_right_social}>
                            <a target="_blank" href="https://www.linkedin.com/in/wagner-guimar%C3%A3es-709b66236/"> <img src={LINKEDIN} alt="" /> </a>
                            <a target="_blank" href="https://github.com/Wagnerluizsg ">  <img src={GITHUB} alt="" /></a>
                        </section>
                    </div>
                </section>
            </div>
            <section className={styles.homepage__cards}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </section>

            <section className={styles.homepage__more_projects}>
                <Button onClick={() => GO_TO_PROJECTS( navigate )} color={`button__dark`}>MAIS PROJETOS</Button>
            </section>


            <footer className={styles.homepage__footer}>
                <p>DESENVOLVIDO POR DEVVAGNER | TODOS OS DIREITOS RESERVADOS ® </p>

            </footer>


        </div>
    )
}

export default HomePage