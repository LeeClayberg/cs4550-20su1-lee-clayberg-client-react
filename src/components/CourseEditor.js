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
        courseTitle: 'Course'
    }

    componentDidMount() {
        courseService.findCourseById(this.props.match.params.course)
            .then(course =>
                this.setState({
                     courseTitle: course.title
                }))
    }

    render() {
        console.log(this.state.course)
        return (
            <div className="container">
                <div className="module-top font-weight-bold">
                    <div className="row no-padding">
                        <div className="col-2 col-md-1 no-padding">
                            <Link className="wbdv-course-editor wbdv-close align-middle" to={`/table/courses`}>
                                <i className="fa fa-times fa-lg module-top-x"></i>
                            </Link>
                        </div>
                        <div className="col-7 col-md-3 text-truncate wbdv-course-title course-title no-padding align-middle">
                           {this.state.courseTitle}
                        </div>
                        <div className="col-7 d-none d-md-block no-padding lesson-top">
                            {
                                <LessonTabs/>
                            }
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
                    {
                        <ModuleList/>
                    }
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
