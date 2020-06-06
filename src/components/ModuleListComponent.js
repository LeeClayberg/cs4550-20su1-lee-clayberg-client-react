import React from "react";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'New Module',
        editingModule: {}
    }

    componentDidMount() {
        // this.props.findAllModules()
        this.props.findModuleForCourse(this.props.params.courseId)
    }

    render() {
        return (
            <div className="col-md-4 wbdv-no-padding">
                <div className="wbdv-module-list">
                    <ul className="list-group">
                        {
                        this.props.modules.map(module =>
                            <li key={module._id} className="d-none d-md-block list-group-item align-middle wbdv-module-item">
                                <a className="wbdv-module-item-title">
                                    Module 1 - jQuery
                                </a>
                                <a className="d-none d-lg-block float-right btn wbdv-x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                            </li>
                        )}
                    </ul>
                    <div className="align-middle" align="right">
                        <i className="d-none d-md-block fa fa-plus fa-lg wbdv-bottom-plus wbdv-module-item-add-btn"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleListComponent
