import React from 'react'
import style from './ProjectCard.module.css'
import exemple from '../../Assets/example.png'
const ProjectCard = () => {
    return (
        <div className={style.card_container}>

            <img style={{ width: '350px', borderRadius: '5px' }} src={exemple} alt="" />
            <div className={style.card_title}>
                <h4>BRAINN</h4>
            </div>
            <div className={style.card_categories}>
                <p>HTML</p>
                <p>JAVASCRIPT</p>
                <p>CSS</p>
                <p>REACT</p>
            </div>
            <div className={style.card_description}>
                <p>Lista de Tarefas feita com React Js , Tarefas
                    armazenadas no memoria do navegador
                    Não somem ao atualizar a página</p>
            </div>

        </div>
    )
}

export default ProjectCard