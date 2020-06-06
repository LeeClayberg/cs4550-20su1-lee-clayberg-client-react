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
                            <li key={module._id} className="list-group-item align-middle wbdv-module-item">
                                <a className="wbdv-module-item-title">
                                    {module.title}
                                </a>
                                <a className="float-right btn wbdv-x-button font-weight-bold wbdv-module-item-delete-btn">X</a>
                            </li>
                        )}
                    </ul>
                    <div className="align-middle" align="right">
                        <i className="btn fa fa-plus fa-lg wbdv-bottom-plus wbdv-module-item-add-btn"
                           onClick={() => this.props.createModule(
                               this.props.params.courseId,
                               {
                                   title: this.state.newModuleTitle
                               })}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleListComponent
