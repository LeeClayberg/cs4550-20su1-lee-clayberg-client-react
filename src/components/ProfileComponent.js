import React from "react";
import {Link} from "react-router-dom";

const ProfileComponent = () =>
    <div className="container">
        <div>
            <h1>Profile</h1>

            <div id="alertFld"
                 className="alert alert-success wbdv-message"
                 role="alert">
                Profile Successfully saved
            </div>

            <div className="form-group-reg row">
                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input id="usernameFld"
                           className="form-control wbdv-field wbdv-username"
                           type="text"
                           placeholder="Alice"
                           title="Username"
                           readOnly/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="phoneFld" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input id="phoneFld"
                           className="form-control wbdv-field wbdv-phone"
                           type="tel"
                           placeholder="(555) 123-4324"
                           title="Phone Number"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="emailFld" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input id="emailFld"
                           className="form-control wbdv-field wbdv-email"
                           type="email"
                           placeholder="alice@wonderland.com"
                           title="Email Address"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="roleFld" className="col-sm-2 col-form-label">Role</label>
                <div className="col-sm-10">
                    <select id="roleFld" className="form-control wbdv-field wbdv-role" disabled>
                        <option selectedvalue="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="dateofbirthFld" className="col-sm-2 col-form-label">Date of
                    Birth</label>
                <div className="col-sm-10">
                    <input id="dateofbirthFld"
                           className="form-control wbdv-field wbdv-dob"
                           type="date"
                           placeholder="mm/dd/yyyy"
                           title="Date of Birth"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <button id="updateBtn"
                            className="btn btn-success btn-block wbdv-button wbdv-update">
                        Update
                    </button>
                </div>
            </div>

            <div className="form-group-reg row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link role="button"
                       id="logoutBtn"
                       className="btn btn-danger btn-block wbdv-button wbdv-logout"
                       to="/">Logout</Link>
                </div>
            </div>
        </div>
    </div>

export default ProfileComponent