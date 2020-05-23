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
            <div className="card">
                <i className="fa fa-pencil fa-lg wbdv-row wbdv-icon card-pencil float-right"/>
                <i className="fa fa-trash fa-lg wbdv-row wbdv-icon card-trash float-right"/>
                <img className="card-img-top" src={require('../preview-image.png')}
                     alt="Card image cap"/>
                <div className="row card-body no-padding">
                    <div className="col-10 card-text">
                        <p className="text-truncate card-title">
                            {this.state.course.title}
                        </p>
                        <div className="align-middle">
                            <i className="fa fa-file-text wbdv-row wbdv-icon align-middle card-doc-icon"></i>
                            <span className="card-time align-bottom">
                                {this.state.course.modified}
                            </span>
                        </div>
                    </div>
                    <div className="col-2 no-padding check">
                        <i className="fa fa-check wbdv-row wbdv-icon align-middle"/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}