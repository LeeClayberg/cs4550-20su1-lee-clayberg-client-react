import React from "react";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'New Module',
        editingModule: {}
    }

    componentDidMount() {
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
                                {
                                    this.state.editingModule._id === module._id &&
                                    <span>
                                        <input value={this.state.editingModule.title}
                                                onChange={(e) => {
                                                    const newTitle = e.target.value
                                                    this.setState(prevState => ({
                                                        editingModule: {
                                                        ...prevState.editingModule,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}/>
                                        <i className="btn fa fa-times float-right wbdv-module-button wbdv-module-item-delete-btn"
                                           onClick={() => this.props.deleteModule(module._id)}/>
                                        <i className="btn fa fa-check float-right wbdv-module-button wbdv-module-item-save-btn"
                                           onClick={() => {
                                               this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                                               this.setState({editingModule: {}})
                                           }}/>
                                    </span>
                                }
                                {
                                    this.state.editingModule._id !== module._id &&
                                    <span>
                                        <a className="wbdv-module-item-title">
                                            {module.title}
                                        </a>
                                        <i className="btn fa fa-pencil float-right wbdv-module-button wbdv-module-item-edit-btn"
                                            onClick={() => this.setState({editingModule: module})}/>
                                    </span>
                                }
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
