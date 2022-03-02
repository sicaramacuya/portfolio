import './LeftContainer.css'

function LeftContainer() {
    return (
        <div id="left-side-container">
            <div id="upper-left-container">
                    <div id="personal-info-container">
                        <h1>Hello, I'm Eric Morales.</h1>
                        <div id="parragraph-container">
                            <p id="p-1">I’m a prospect Software Engineer currently studying at Make School inside the heart of San Francisco, California. I most likely will be specialized on data science, and iOS mobile development by fall of 2022. I can't say I'm a full fletch Software Engineer yet. Nevertheless, that won't stop me from letting you know about my skills. That's why I will be sharing my biggest projects at the moment and some of my skills that can be put to use here.</p>
                        </div>
                    </div>
                    <nav id="navigator">
                        <ul id="ul-nav">
                            <li id="projects-link">
                                <a href="#projects">
                                    <span id="project-text">Projects</span>
                                </a>
                            </li>
                            <li id="skills-link">
                                <a href="#skills">
                                    <span id="skills-text">Skills</span>
                                </a>
                            </li>
                            <li id="contact-link">
                                <a href="#contact">
                                    <span id="contact-text">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div>
            <div id="bottom-left-container">
                {/* <img src="./resources/pictures/profile.jpg" alt="Eric's picture with blur face."> */}
                <ul id="ul-contact">
                    <li id="linkedin-link">
                        <a href="https://www.linkedin.com/in/eric-morales-95691a1b8/">
                            <span id="linkedin-text">LinkedIn</span>
                        </a>
                    </li>
                    <li id="github-link">
                        <a href="https://github.com/sicaramacuya">
                            <span id="github-text">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftContainer