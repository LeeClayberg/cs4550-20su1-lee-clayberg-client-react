import React from "react";
import {Link} from "react-router-dom";

const LoginComponent = () =>
    <div className="container">
        <div>
            <h1>Sign In</h1>

            <div className="form-group-reg row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input id="username"
                           className="form-control wbdv-field wbdv-username"
                           type="text"
                           placeholder="Alice"
                           title="Use this username to login"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input id="password"
                           className="form-control wbdv-field wbdv-password"
                           type="text"
                           placeholder="123qwe#$%"
                           title="Use this password to login"/>
                </div>
            </div>

            <div className="form-group-reg row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link role="button"
                       className="btn btn-primary btn-block wbdv-button wbdv-login"
                       to="../profile/profile.template.client.html">Sign in</Link>
                    <div className="row">
                        <div className="col-6">
                            <Link className="wbdv-link wbdv-cancel"
                               to="../index.html">Cancel</Link>
                        </div>
                        <div className="col-6">
                            <Link className="float-right wbdv-link wbdv-register"
                               to="../register/register.template.client.html">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default LoginComponent
