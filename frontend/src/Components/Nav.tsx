
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

function Nav () {
    

    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/addvolunteer">Add Volunteer</Link></li>
        <li><Link to="/volunteers">Available Volunteers</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <Link className="btn btn-ghost text-xl" to="/">VolunPair</Link>
  </div>
</div>
      <Outlet /> 
        </>

    )
}

export default Nav