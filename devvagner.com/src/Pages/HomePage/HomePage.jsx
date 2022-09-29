import React from 'react'
import AboutMe from '../../Components/AboutMe/AboutMe'
import ProjectsView from '../../Components/ProjectsView/ProjectsView'
import styles from './HomePage.module.css'
const HomePage = () => {

    return (
        <div className={styles.homepage_container}>
            <AboutMe />
            <ProjectsView />
        </div>
    )
}

export default HomePage