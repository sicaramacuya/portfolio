import './Skills.css';

function Skills(props) {
    const { titles, descriptions } = props

    return (
        <div className="Skills" id='Skills'>
            {
                titles.map((title, index) => (
                    <article class="skills-articles">
                            <div id="skills-card-1" class="skills-card">
                                <header class="skill-header">
                                    <h3 class="skill">{title}</h3>
                                </header>
                                <div class="skill-description-container">
                                    <h4 class="skills-description">{descriptions[index]}</h4>
                                </div>
                            </div>
                        </article>
                ))
            }
        </div>
    )
}

export default Skills