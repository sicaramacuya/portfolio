import './LeftContainer.css';
import About from '../About/About.js';
import image from '../../resources/profile.jpg';

function LeftContainer() {
    return (
        <div id="left-side-container">
            <div id="upper-left-container">
                    <About title="Hello, I'm Eric Morales." 
                    description="I’m a prospect Software Engineer currently studying at Make School inside the heart of San Francisco, California. I most likely will be specialized on data science, and iOS mobile development by fall of 2022. I can't say I'm a full fletch Software Engineer yet. Nevertheless, that won't stop me from letting you know about my skills. That's why I will be sharing my biggest projects at the moment and some of my skills that can be put to use here."
                    />
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
                <img src={image} alt="Eric's with blur face."/>
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