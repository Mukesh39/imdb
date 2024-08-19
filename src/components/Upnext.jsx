import React from "react";
import "../styles/Upnext.css";
import Logo from '../assets/Logo.png'


//this component still on buildings stage.

const Upnext = () => {
  return (
    
    <div className="upnext-movies">
       
      <div className="image">
        <img src={Logo} alt="" />
      </div>

      <div className="upnext-movie-info">
        <div className="button">
          <button>radio</button>
        </div>

        <div className="movie-info">
          <p>Hello This is next Moview</p>
          <p>Description of the Movie</p>
        </div>

        <div className="likeButton">
          <button>Like</button>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Upnext;
