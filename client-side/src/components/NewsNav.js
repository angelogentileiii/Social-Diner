import { Link } from 'react-router-dom';

function NewsNav () {
    return (
        <div>
            <Link to="home/instagram" className="w3-bar-item w3-button">Instagram</Link>
            <Link to="home/infatuation" className="w3-bar-item w3-button">Infatuation</Link>
        </div>
    )


}

export default NewsNav