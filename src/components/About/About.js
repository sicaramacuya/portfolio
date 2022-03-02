import './About.css';

function About(props) {
    const {title, description} = props

    return (
    <div className="About">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    )
}

export default About