import logo from './logo.png'

function Header () {
    return (
        <>
            <div className='header-container' style={{ color: '#8d4843', verticalAlign: 'middle' }}>
                <img src={logo} alt="Logo" style={{ width: '15em', marginRight: '10em' }} />
                <div className='header-text'>Social Diner</div>
            </div>
        </>
    )
}

export default Header