import './Navigation.css';

function Navigation(props) {
    const { titles, hrefs } = props

    return (
    <nav id="navigator">
        <ul id="ul-nav">
            {
                titles.map((title, index) => (
                    <li>
                        <a href={hrefs[index]}>
                            <span id="span-title">{title}</span>
                        </a>
                    </li>  
                ))
            }
        </ul>
    </nav>
    )
}

export default Navigation