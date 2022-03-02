import './Navigation.css';

function Navigation(props) {
    const { titles, hrefs } = props

    return (
    <nav className="Navigation">
        <ul>
            {
                titles.map((title, index) => (
                    <li>
                        <a href={hrefs[index]}>
                            {title}
                        </a>
                    </li>  
                ))
            }
        </ul>
    </nav>
    )
}

export default Navigation