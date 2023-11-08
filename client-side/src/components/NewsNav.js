import { Link } from 'react-router-dom';

function NewsNav () {
    return (
        <div className='socialNavigation'>
            <Link to="home/instagram" className="news-link"><strong>Instagram</strong></Link>
            <Link to="home/infatuation" className="news-link"><strong>Infatuation</strong></Link>
            <Link to="home/timeout" className="news-link"><strong>Timeout</strong></Link>
            <Link to="home/eater" className="news-link"><strong>Eater</strong></Link>
        </div>
    )


}

export default NewsNav