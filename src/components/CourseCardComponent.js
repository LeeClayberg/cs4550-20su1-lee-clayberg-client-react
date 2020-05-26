import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        unsaved_changes: this.props.course,
        course: this.props.course
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.selected && !this.props.selected) {
            this.setState({
                editing: false,
                unsaved_changes: this.state.course
            })
        }
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () => {
        this.setState({
            course: this.state.unsaved_changes
        })
        courseService.updateCourse(
            this.state.unsaved_changes._id,
            this.state.unsaved_changes)
            .then(status => this.setEditing(false))
    }

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            unsaved_changes: {
                ...prevState.unsaved_changes,
                title: newTitle
            }
        }))

    render() {
        return (
            <div className="col mb-4">
                <div className="card"
                     onClick={() => this.props.selectCourse(this.state.course._id)}>
                    <span className={this.props.selected ? 'card-selected' : ''}>
                        {
                            !this.state.editing && this.props.selected &&
                            <span>
                                <i className="fa fa-pencil fa-lg wbdv-row wbdv-icon wbdv-card-pencil float-right"
                                   onClick={() => this.setEditing(true)}/>
                                <i className="fa fa-trash fa-lg wbdv-row wbdv-icon wbdv-card-trash float-right"
                                   onClick={() => this.props.deleteCourse(this.props.course)}/>
                            </span>
                        }
                        <img className="card-img-top" src={require('../preview-image.png')}
                             alt="Card image cap"/>
                        <div className="row card-body wbdv-no-padding">
                            <div className="col-10 wbdv-card-text">
                                {
                                    !this.state.editing &&
                                    <p className={this.props.selected ?
                                                  'text-truncate card-title wbdv-selected-white' :
                                                  'text-truncate card-title wbdv-sharp-blue'}>
                                        <Link to={`/editor/${this.state.course._id}`}>
                                            <span className={this.props.selected ? 'wbdv-selected-white' : ''}>
                                                {this.state.course.title}
                                            </span>
                                        </Link>
                                    </p>
                                }
                                {
                                    this.state.editing && this.props.selected &&
                                    <input
                                        className="form-control wbdv-card-input align-middle"
                                        onChange={(event) => this.updateCourseTitle(event.target.value)}
                                        value={this.state.unsaved_changes.title}/>
                                }
                                <div className="align-middle">
                                    <span className={this.props.selected ? 'wbdv-selected-white' : 'wbdv-sharp-blue'}>
                                        <i className="fa fa-file-text wbdv-row wbdv-icon align-middle wbdv-card-doc-icon"></i>
                                    </span>
                                    <span className="wbdv-card-time align-bottom">
                                        <span className={this.props.selected ? 'wbdv-selected-white' : ''}>
                                            {this.state.course.modified}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-2 wbdv-no-padding wbdv-check">
                                {
                                    this.state.editing &&
                                    <i className="fa fa-check wbdv-row wbdv-icon align-top wbdv-selected-white"
                                       onClick={this.ok}/>
                                }
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}