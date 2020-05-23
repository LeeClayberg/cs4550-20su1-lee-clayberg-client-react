import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    ok = () =>
        courseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
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
                                <i className="fa fa-pencil fa-lg wbdv-row wbdv-icon card-pencil float-right"
                                   onClick={() => this.setEditing(true)}/>
                                <i className="fa fa-trash fa-lg wbdv-row wbdv-icon card-trash float-right"
                                   onClick={() => this.props.deleteCourse(this.props.course)}/>
                            </span>
                        }
                        <img className="card-img-top" src={require('../preview-image.png')}
                             alt="Card image cap"/>
                        <div className="row card-body no-padding">
                            <div className="col-10 card-text">
                                {
                                    !this.state.editing &&
                                    <p className="text-truncate card-title">
                                        <span className={this.props.selected ? 'selected-white' : ''}>
                                        {this.state.course.title}
                                        </span>
                                    </p>
                                }
                                {
                                    this.state.editing &&
                                    <input
                                        className="form-control card-input align-middle"
                                        onChange={(event) => this.updateCourseTitle(event.target.value)}
                                        value={this.state.course.title}/>
                                }
                                <div className="align-middle">
                                    <span className={this.props.selected ? 'selected-white' : 'sharp-blue'}>
                                        <i className="fa fa-file-text wbdv-row wbdv-icon align-middle card-doc-icon"></i>
                                    </span>
                                    <span className="card-time align-bottom">
                                        <span className={this.props.selected ? 'selected-white' : ''}>
                                            {this.state.course.modified}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-2 no-padding check">
                                {
                                    this.state.editing &&
                                    <i className="fa fa-check wbdv-row wbdv-icon align-top selected-white"
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