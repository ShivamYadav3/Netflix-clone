import React, { useEffect, useState } from "react";
import "./navbar.css";
// import Home from '../NavbarHeading/Home';

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //this useEffect is for making header back ground color black when user scroo; down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* { if user scrol so  "nav_black"  class gonna be fire and we are given a Bg color black in nav_black  }        */}
      <div className="NavDiv1">
        <img
          className="netflix_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
        <p className="NavHomes">Home</p>
        <p className="NavHomes">Tv Show</p>
        <p className="NavHomes">Movies</p>
        <p className="NavHomes">New & Popular</p>
        <p className="NavHomes">My List</p>
        <p className="NavHomes">Browser by Languages</p>
      </div>

      <div className="NavDiv2">
        <p>
          <i className="fa-solid fa-magnifying-glass"></i>
        </p>
        <p>Children</p>
        <p>
          <i className="fa-sharp fa-regular fa-bell"></i>
        </p>
        <img
          className="netflix_logo2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
