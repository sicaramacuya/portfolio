import './RightContainer.css';
import Projects from '../Projects/Projects.js';
import Skills from '../Skills/Skills.js';

function RightContainer() {
    return (
        <div className='RightContainer'>

            <Projects 
            titles={['Tip Calculator', 'Chatbot']}
            descriptions={[
            'An introductory project for learning JavaScript.',
            'An introductory project for conditionals, lists and loops.']}
            domains={[
            'HTML 51% | CSS 35% | JavaScipt 14%',
            'Python 100%']}
            />
            
            <Skills 
            titles={[
            'HTML & CSS Implementation', 
            'Coding Languages', 
            'Problem Solving and Logical Thinking',
            'Teamwork']}
            descriptions={[
            'Still on a beginenner. However, skilled enough to create this website.',
            'Able to write code on Python, C++ and in a less degree JavaScript.',
            'Capable to not only pinpoint software issues but also use deductive reasoning to solve problems.',
            'Proficiency on collaboration, active listening, conflic resolution, oral and written communication.'
            ]}
            />
            
            <p id="acknowledgment">Acknowledgments: Website adapted from <a href="https://sarahdayan.dev/"><strong>Nicolas Meuzard</strong></a> and <a href="https://philiphugle.de/en/"><strong>Philip Hugle</strong></a></p>
        </div>
    )
}

export default RightContainer