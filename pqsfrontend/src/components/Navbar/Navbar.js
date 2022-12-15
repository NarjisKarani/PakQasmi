import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="main-nav">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/members">Members List</Link></li>
            <li><Link to="/girlslisting">Girls</Link></li>
            <li><Link to="/Boyslistings">Boys</Link></li>
            {/* <li><Link to="/back">Card Back</Link></li> */}
            {/* <li><Link to="/login">Login</Link></li> */}
            <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
