import './Contact.css';
import image from '../../resources/profile.jpg';

function Contact(props) {
    const { titles, hrefs} = props

    return (
        <div className='Contact'>
            <img src={image} alt="Eric's with blur face."/>
            <ul>
                {
                    titles.map((title, index) => (
                        <li>
                            <a href={hrefs[index]}>
                                <span>{title}</span>
                            </a>
                        </li>  
                    ))
                }
            </ul>
        </div>
    )
}

export default Contact