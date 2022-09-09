import React from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { useState } from 'react';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpen] = useState(false)
    return (
        <div className='header' id="home">
            <img src={Logo} alt='' className='logo' />
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor',
                        padding: '0.5rem',
                        borderRadius: '5px'
                    }}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li><Link
                        onClick={() => setMenuOpen(false)}
                        activeClass="active"
                        to='home'
                        smooth={true}
                        span={true}>Home</Link></li>
                    <li><Link
                        onClick={() => setMenuOpen(false)}
                        to='programs'
                        smooth={true}
                        span={true}
                    >Programs</Link></li>
                    <li><Link
                        onClick={() => setMenuOpen(false)}
                        to='Reasons'
                        smooth={true}
                        span={true}

                    >Why Us</Link></li>
                    <li><Link
                        onClick={() => setMenuOpen(false)}
                        to='Plans'
                        smooth={true}
                        span={true}
                    >Plans</Link></li>
                    <li><Link
                        onClick={() => setMenuOpen(false)}
                        to='testimonials'
                        smooth={true}
                        span={true}

                    >Testimonials</Link></li>
                </ul>
            )};

        </div >
    )
}

export default Header;