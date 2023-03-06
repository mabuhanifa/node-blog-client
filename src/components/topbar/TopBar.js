import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to={'/'} className="topListItem">HOME</Link>
          <Link to={'/'} className="topListItem">ABOUT</Link>
          <Link to={'/'} className="topListItem">CONTACT</Link>
          <Link to={'/write'} className="topListItem">WRITE</Link>
          <Link to={'/'} className="topListItem">LOGOUT</Link>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

        <ul className="topList">
          <li className="topListItem"></li>
          <li className="topListItem"></li>
        </ul>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
