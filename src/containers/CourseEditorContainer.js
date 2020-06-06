import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import {Link} from "react-router-dom";
import courseService from "../services/CourseService"
import ModuleListContainer from "./ModuleListContainer";

// stateless component
class CourseEditorContainer
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
                <div className="wbdv-module-top font-weight-bold">
                    <div className="row wbdv-no-padding">
                        <div className="col-2 col-md-1 wbdv-no-padding">
                            <Link className="wbdv-course-editor wbdv-close align-middle" to={`/table/courses`}>
                                <i className="fa fa-times fa-lg wbdv-module-top-x"></i>
                            </Link>
                        </div>
                        <div className="col-7 col-md-3 text-truncate wbdv-course-title wbdv-course-title wbdv-no-padding align-middle">
                           {this.state.courseTitle}
                        </div>
                        <div className="col-7 d-none d-md-block wbdv-no-padding wbdv-lesson-top">
                            {
                                <LessonTabsComponent/>
                            }
                        </div>
                        <div className="col-2 d-md-none wbdv-collapsed-lesson">
                            Pages
                        </div>
                        <div className="d-none d-md-block col-md-1 wbdv-no-padding">
                            <i className="fa fa-plus fa-lg wbdv-top-plus wbdv-lesson-add-btn float-right"></i>
                        </div>
                        <div className="col-1 d-md-none wbdv-no-padding">
                            <i className="fa fa-bars fa-lg wbdv-top-plus wbdv-lesson-add-btn float-right"></i>
                        </div>
                    </div>
                </div>
                <div className="row wbdv-no-margin">
                    {
                        <ModuleListContainer/>
                    }
                    <div className="col-md-8 wbdv-no-padding">
                        {
                            <TopicPillsComponent/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorContainer
