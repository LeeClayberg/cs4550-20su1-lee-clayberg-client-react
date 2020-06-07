import React from "react";
import {Link} from "react-router-dom";
import ModuleListContainer from "./ModuleListContainer";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import courseService from "../services/CourseService";

class CourseEditorContainer extends React.Component {
    state = {
        courseName: ""
    }

    componentDidMount() {
        courseService.findCourseById(this.props.match.params.courseId)
            .then(course =>
                 this.setState({
                      courseName: course.title
                 }))
    }

    render() {
        return (
            <div className="container">
                <div className="wbdv-module-top font-weight-bold">
                    <div className="row wbdv-no-padding">
                        <div className="col-2 col-md-1 wbdv-no-padding">
                            <Link className="wbdv-course-editor wbdv-close align-middle"
                                  to={`/table/courses`}>
                                <i className="fa fa-times fa-lg wbdv-module-top-x"></i>
                            </Link>
                        </div>
                        <div
                            className="col-10 col-md-2 text-truncate wbdv-course-title wbdv-course-title wbdv-no-padding align-middle">
                            {this.state.courseName}
                        </div>
                        <div className="col-12 col-md-9 wbdv-no-padding wbdv-lesson-top">
                            {
                                <LessonTabsContainer {...this.props.match}/>
                            }
                        </div>
                    </div>
                </div>
                <div className="row wbdv-no-margin">
                    {
                        <ModuleListContainer {...this.props.match}/>
                    }
                    <div className="col-md-8 wbdv-no-padding">
                        {
                            <TopicPillsContainer {...this.props.match}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorContainer
