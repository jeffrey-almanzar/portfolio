import { useEffect } from 'react';
import Link from 'next/link';

function Header(props) {
    useEffect(() => {
        window.addEventListener('scroll', addNavBackgroundClass);

        const navbar = document.getElementsByClassName("navbar")[0];
        const sticky = 80;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("custom-nav-bg");
        }

        function addNavBackgroundClass() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("custom-nav-bg");
            } else {
                navbar.classList.remove("custom-nav-bg");
            }
        }


        return () => {
            window.removeEventListener('scroll', addNavBackgroundClass);
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
            <div className="container d-flex justify-content-between">
                <Link className="logo" href="/">&#123;JA&#125;</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars menu-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mt-4 mt-lg-0 me-auto mb-2 mb-lg-0 d-lg-flex justify-content-end w-100">
                        <li className="nav-item ">
                            <Link className="nav-link" href="/#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/#experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/#credentials">Credentials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/#projects">Projects</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="/#contact">Contact</Link>
                        </li> */}
                        <li className='ps-2 nav-item nav-social-media-container'>
                            <div className="mt-4 mt-lg-0 social-media-container">
                                <a className="d-inline-block me-3" target="_blank" href="https://github.com/jeffrey-almanzar"><i
                                    className="fa-brands fa-github"></i></a>
                                <a className="d-inline-block" target="_blank" href="https://www.linkedin.com/in/jeffrey-almanzar/"><i
                                    className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;