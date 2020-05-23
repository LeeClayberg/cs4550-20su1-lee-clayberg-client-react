import React from "react";
import {Link} from "react-router-dom";

const RegistrationComponent = () =>
    <div className="container">
        <div>
            <h1>Sign Up</h1>

            <div className="form-group-reg row">
                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input id="usernameFld"
                           className="form-control wbdv-field wbdv-username"
                           type="text"
                           placeholder="Alice"
                           title="Use this username to login"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input id="passwordFld"
                           className="form-control wbdv-field wbdv-password"
                           type="text"
                           placeholder="123qwe#$%"
                           title="Use this password to login"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">Verify
                    Password</label>
                <div className="col-sm-10">
                    <input id="verifyPasswordFld"
                           className="form-control wbdv-field wbdv-password-verify"
                           type="text"
                           placeholder="123qwe#$%"
                           title="Use this to verify password"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link role="button"
                       className="btn btn-primary btn-block wbdv-button wbdv-register"
                       to="/profile">Sign up</Link>
                    <div className="row">
                        <div className="col-6">
                            <Link className="wbdv-link wbdv-cancel"
                               to="/">Cancel</Link>
                        </div>
                        <div className="col-6">
                            <Link className="float-right wbdv-link wbdv-login"
                               to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default RegistrationComponent