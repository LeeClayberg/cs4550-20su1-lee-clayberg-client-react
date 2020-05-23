import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {Link} from "react-router-dom";
import courseService from "../services/CourseService"

// stateless component
class CourseEditor
    extends React.Component
{
    state = {
        course: 'Course'
    }

    componentDidMount() {
        courseService.findCourseById(this.props.match.params.course)
            .then(course =>
                this.setState({
                     course: course.title
                }))
    }

    render() {
        console.log(this.state.course)
        return (
            <div className="container">
                <div className="module-top font-weight-bold">
                    <div className="row no-padding">
                        <div className="col-2 col-md-1 no-padding">
                            <a className="wbdv-course-editor wbdv-close align-middle"
                               href="../course-list/course-list.template.client.html">
                                <i className="fa fa-times fa-lg module-top-x"></i>
                            </a>
                        </div>
                        <div className="col-7 col-md-3 text-truncate wbdv-course-title course-title no-padding align-middle">
                           {this.state.course}
                        </div>
                        <div className="col-7 d-none d-md-block no-padding lesson-top">
                            <ul className="nav nav-pills nav-fill wbdv-lesson-tabs float-right">
                                <a className="nav-item nav-link">Build</a>
                                <a className="nav-item nav-link active">Pages</a>
                                <a className="nav-item nav-link">Theme</a>
                                <a className="nav-item nav-link">Store</a>
                                <a className="nav-item nav-link">Apps</a>
                                <a className="nav-item nav-link">Settings</a>
                            </ul>
                        </div>
                        <div className="col-2 d-md-none collapsed-lesson">
                            Pages
                        </div>
                        <div className="d-none d-md-block col-md-1 no-padding">
                            <i className="fa fa-plus fa-lg top-plus wbdv-lesson-add-btn float-right"></i>
                        </div>
                        <div className="col-1 d-md-none no-padding">
                            <i className="fa fa-bars fa-lg top-plus wbdv-lesson-add-btn float-right"></i>
                        </div>
                    </div>
                </div>
                <div className="row no-margin">
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
                    <div className="col-md-8 no-padding">
                        <div className="topics">
                            <ul className="nav nav-pills nav-fill wbdv-topic-pill-list">
                                <a className="nav-item topic-link wbdv-topic-pill">Topic 1</a>
                                <a className="nav-item topic-link active wbdv-topic-pill">Topic
                                    2</a>
                                <a className="nav-item topic-link wbdv-topic-pill">Topic 3</a>
                                <a className="nav-item topic-link wbdv-topic-pill">Topic 4</a>
                                <a className="topic-plus align-middle" align="center">
                                    <i className="fa fa-plus fa-sm wbdv-topic-add-btn"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditor
