import './Contact.css';
import image from '../../resources/profile.jpg';

function Contact() {
    return (
        <div className='Contact'>
            <img src={image} alt="Eric's with blur face."/>
                <ul id="ul-contact">
                    <li id="linkedin-link">
                        <a href="https://www.linkedin.com/in/eric-morales-95691a1b8/">
                            <span className='contact-span'>LinkedIn</span>
                        </a>
                    </li>
                    <li id="github-link">
                        <a href="https://github.com/sicaramacuya">
                            <span className='contact-span'>GitHub</span>
                        </a>
                    </li>
                </ul>
        </div>
    )
}

export default Contact