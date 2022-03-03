import './Projects.css';

function Projects(props) {
    const { titles, descriptions, domains } = props

    return (
        <div className="Projects" id='Projects'>
            {
                titles.map((title, index) => (
                    <article className='project-articles'>
                        <a href="https://github.com/sicaramacuya/tip-calculator">
                            <p className="project-domain">{domains[index]}</p>
                            <h3 className="project-name">{title}</h3>
                            <h4 className="project-description">{descriptions[index]}</h4>
                        </a>
                    </article>  
                ))
            }
        </div>
    )
}

export default Projects