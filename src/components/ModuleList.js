import React from "react";

const ModuleList = () =>
    <div className="col-md-4 no-padding">
        <div className="module-list">
            <ul className="list-group wbdv-module-list">
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 1 - jQuery
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
                <li className="list-group-item active align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 2 - React
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                    <a className="d-md-none float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">
                        <i className="fa fa-caret-down fa-lg"></i>
                    </a>
                </li>
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 3 - Redux
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 4 - Native
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 5 - Angular
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 6 - Node
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
                <li className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                    <a className="wbdv-module-item-title">
                        Module 7 - Mongo
                    </a>
                    <a className="d-none d-lg-block float-right btn x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                </li>
            </ul>
            <div className="align-middle" align="right">
                <i className="d-none d-md-block fa fa-plus fa-lg bottom-plus wbdv-module-item-add-btn"></i>
            </div>
        </div>
    </div>

export default ModuleList
