import './About.css';

function About(props) {
    const {title, description} = props

    return (
    <div id="personal-info-container">
        <h1>{title}</h1>
        <div id="parragraph-container">
            <p id="p-1">{description}</p>
        </div>
    </div>
    )
}

export default About