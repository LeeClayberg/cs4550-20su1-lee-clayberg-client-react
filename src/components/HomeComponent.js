import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
  <div className="container">
    <h2 className="home-title">Home</h2>
    <div>
      <div>
        <Link className="home-links" to='/editor'>
          Course Editor
        </Link>
      </div>
      <div>
        <Link className="home-links" to='/table/courses'>
          Course List
        </Link>
      </div>
      <div>
        <Link className="home-links" to='/login'>
          Login
        </Link>
      </div>
      <div>
        <Link className="home-links" to='/register'>
          Registration
        </Link>
      </div>
      <div>
        <Link className="home-links" to='/profile'>
          Profile
        </Link>
      </div>
    </div>
  </div>

export default HomeComponent
