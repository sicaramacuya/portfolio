import LeftContainer from '../LeftContainer/LeftContainer.js';
import RightContainer from '../RightContainer/RightContainer.js';

function Container(props) {
    const {column} = props

    var container;
    if (column === 'left') {
        container = <LeftContainer />
    } else {
        container = <RightContainer />
    }

    return (
        container
    )
}

export default Container