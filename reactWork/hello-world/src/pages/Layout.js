import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className='tabs'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <br />
            <Outlet />
        </>
    );
}

export default Layout;