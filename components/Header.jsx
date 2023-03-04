import Link from 'next/link';

function Header (props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex justify-content-between">
                <Link className="logo" href="/">JA</Link>
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
                        <li className="nav-item">
                            <Link className="nav-link" href="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;