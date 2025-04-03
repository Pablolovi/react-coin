/* Root.jsx */
import { Outlet, Link } from "react-router-dom";

function Root() {
    return (
      <div className="root-container">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link className="nav-item" to="/">Home</Link></li>
            <li><Link className="nav-item" to="/favorites">Favorites</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }

export default Root;