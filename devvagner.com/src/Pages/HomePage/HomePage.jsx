import React from 'react'
import Button from '../../Components/Button/Button'
import Header from '../../Components/Header/Header'
import styles from './HomePage.module.css'
import LINKEDIN from '../../Assets/in.svg'
import GITHUB from '../../Assets//github.svg'
import ProjectCard from '../../Components/Project Card/ProjectCard'
const HomePage = () => {
    return (
        <div className={styles.homepage__container}>
            <Header />
            <div className={styles.homepage__infos}>

                <section className={styles.homepage__aboutme_left}>
                    <div className={styles.homepage__aboutme_left_text}>

                        <h2 className={styles.text1}>Olá, eu sou o</h2>
                        <h2 className={styles.text2}>Wagner Guimarães</h2>
                        <h4 className={styles.text3}>Desenvolvedor Front-End</h4>


                        <section className={styles.homepage__aboutme_left_buttons}>
                            <Button color={`button__red`} >Currículo</Button>
                            <Button color={`button__dark`}>Projetos</Button>
                        </section>
                    </div>
                </section>
                <section className={styles.homepage__aboutme_right}>
                    <div className={styles.homepage__aboutme_right_text}>
                        <h3>Sou um desenvoledor <span>Front-End</span></h3>
                        <h3>com foco no  <span>desenvolvimento web </span> e</h3>
                        <h3>apaixonado por <span>UI | UX Design</span>, moro</h3>
                        <h3>atualmente no Rio de Janeiro/BR,</h3>


                        <section className={styles.homepage__aboutme_right_social}>
                            <img src={LINKEDIN} alt="" />
                            <img src={GITHUB} alt="" />
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
                <Button color={`button__dark`}>MAIS PROJETOS</Button>
            </section>


            <footer className={styles.homepage__footer}>
                <p>DESENVOLVIDO POR DEVVAGNER | TODOS OS DIREITOS RESERVADOS ® </p>

            </footer>


        </div>
    )
}

export default HomePage