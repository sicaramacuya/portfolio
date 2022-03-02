import './Projects.css';

function Projects(props) {
    const { titles, descriptions, domains } = props

    return (
        <div className="Projects">
            {
                titles.map((title, index) => (
                    <article className='project-articles'>
                        <a href="https://github.com/sicaramacuya/tip-calculator">
                            <p className="project-domain">{domains[index]}</p>
                            <h3 className="project-name">{title}</h3>
                            <p className="project-description">{descriptions[index]}</p>
                        </a>
                    </article>  
                ))
            }
        </div>
    )
}

export default Projects