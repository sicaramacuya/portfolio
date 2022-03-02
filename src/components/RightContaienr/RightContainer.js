import './RightContainer.css'

function RightContainer() {
    return (
        <div>
            <div id="right-side-container">
                <div id="projects">
                    <div id="projects-clip-board">
                        <article id="projects-article-1" class="project-articles">
                            <a class="article-link-selection" href="https://github.com/sicaramacuya/tip-calculator">
                                <p class="project-domain">HTML 51% | CSS 35% | JavaScipt 14%</p>
                                <h3 class="project-name">Tip Calculator</h3>
                                <p class="project-description">An introductory project for learning JavaScript.</p>
                            </a>
                        </article>
                        <article id="projects-article-2" class="project-articles">
                            <a class="article-link-selection" href="https://github.com/sicaramacuya/chat-bot">
                                <p class="project-domain">Python 100%</p>
                                <h3 class="project-name">Chatbot</h3>
                                <p class="project-description">An introductory project for conditionals, lists and loops.</p>
                            </a>
                        </article>
                    </div>
                </div>                
                <div id="skills">
                    <div id="skills-clip-board">
                        <article id="skills-article-1" class="skills-articles">
                            <div id="skills-card-1" class="skills-card">
                                <header class="skill-header">
                                    <h3 class="skill">HTML & CSS Implementation</h3>
                                </header>
                                <div class="skill-description-container">
                                    <h4 class="skills-description">Still on a beginenner. However, skilled enough to create this website.</h4>
                                </div>
                            </div>
                        </article>
                        <article id="skills-article-2" class="skills-articles">
                            <div id="skills-card-2" class="skills-card">
                                <header class="skill-header">
                                    <h3 class="skill">Coding Languages</h3>
                                </header>
                                <div class="skill-description-container">
                                    <h4 class="skills-description">Able to write code on Python, C++ and in a less degree JavaScript.</h4>
                                </div>                            
                            </div>
                        </article>
                        <article id="skills-article-3" class="skills-articles">
                            <div id="skills-card-3" class="skills-card">
                                <header class="skill-header">
                                    <h3 class="skill">Problem Solving and Logical Thinking</h3>
                                </header>
                                <div class="skill-description-container">
                                    <h4 class="skills-description">Capable to not only pinpoint software issues but also use deductive reasoning to solve problems.</h4>
                                </div>                                                       
                            </div>
                        </article>
                        <article id="skills-article-4" class="skills-articles">
                            <div id="skills-card-4" class="skills-card">
                                <header class="skill-header">
                                    <h3 class="skill">Teamwork</h3>
                                </header>
                                <div class="skill-description-container">
                                    <h4 class="skills-description">Proficiency on collaboration, active listening, conflic resolution, oral and written communication.</h4>
                                </div>                                                     
                            </div>
                        </article>
                    </div>
                </div>
                <p id="acknowledgment">Acknowledgments: Website adapted from <a href="https://sarahdayan.dev/">Nicolas Meuzard</a> and <a href="https://philiphugle.de/en/">Philip Hugle</a></p>
            </div>
        </div>
    )
}

export default RightContainer