import React from "react";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {
    state = {
        newLessonTitle: 'New Lesson',
        editingLesson: {},
        selected: this.props.params.lessonId
    }

    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.setState({
                selected: this.props.params.lessonId
            });
        }
    }

    render() {
        return (
            <span>
                <ul className="nav nav-pills nav-fill wbdv-lesson-tabs float-right">
                     {
                         this.props.lessons.map(lesson =>
                              <Link className={`nav-item nav-link ${this.state.selected === lesson._id ? "active" : ""}`}
                                    to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${lesson._id}`}
                                    onClick={() => {
                                          this.setState({
                                                selected: lesson._id
                                          });
                                    }}>
                                      {
                                              this.state.editingLesson._id === lesson._id &&
                                              <input
                                                  value={this.state.editingLesson.title}
                                                  onChange={(e) => {
                                                          const newTitle = e.target.value
                                                          this.setState(
                                                              prevState => ({
                                                                      editingLesson: {
                                                                              ...prevState.editingLesson,
                                                                              title: newTitle

                                                                      }
                                                              }))
                                                  }}/>
                                      }
                                      {
                                              this.state.editingLesson._id !== lesson._id &&
                                              <span className="wbdv-module-item-title">
                                                        {lesson.title}
                                              </span>
                                      }
                                      {
                                              this.state.editingLesson._id === lesson._id &&
                                              <span>
                                                <i className="btn fa fa-times float-right wbdv-lesson-button"
                                                onClick={() => this.props.deleteLesson(lesson._id)}/>
                                                <i className="btn fa fa-check float-right wbdv-lesson-button"
                                                onClick={() => {
                                                   this.props.updateLesson(this.state.editingLesson._id, this.state.editingLesson)
                                                   this.setState({editingLesson: {}})}}/>
                                              </span>
                                      }
                                      {
                                              this.state.editingLesson._id !== lesson._id && this.state.selected === lesson._id &&
                                              <i className="btn fa fa-pencil float-right wbdv-lesson-button"
                                                 onClick={() => this.setState({editingLesson: lesson})}/>
                                      }
                              </Link>)
                     }
                     {
                             this.props.params.moduleId &&
                             <il className="wbdv-no-padding">
                                     <i className="btn fa fa-plus fa-lg wbdv-top-plus wbdv-lesson-add-btn float-right"
                                        onClick={() => this.props.createLesson(
                                            this.props.params.moduleId,
                                            {
                                                    title: this.state.newLessonTitle
                                            })}/>
                             </il>
                     }
                </ul>
            </span>
        )
    }
}

export default LessonTabsComponent
