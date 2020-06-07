import React from "react";

class LessonTabsComponent extends React.Component {
        state = {
                newLessonTitle: 'New Lesson',
                editingLesson: {},
                selected: {}
        }

        componentDidMount() {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
                if(prevProps.params.moduleId !== this.props.params.moduleId) {
                        this.props.findLessonsForModule(this.props.params.moduleId)
                }
        }

        render() {
                return (
                    <span>
                        <ul className="nav nav-pills nav-fill wbdv-lesson-tabs float-right">
                            {
                                this.props.lessons.map(lesson =>
                                     <il className="nav-item nav-link">
                                             {lesson.title}
                                             <i className="btn fa fa-times float-right wbdv-module-button wbdv-module-item-delete-btn"
                                                onClick={() => this.props.deleteLesson(lesson._id)}/>
                                     </il>)
                            }
                            <il className="wbdv-no-padding">
                                <i className="btn fa fa-plus fa-lg wbdv-top-plus wbdv-lesson-add-btn float-right"
                                   onClick={() => this.props.createLesson(
                                       this.props.params.moduleId,
                                       {
                                               title: this.state.newLessonTitle
                                       })}/>
                            </il>
                        </ul>
                    </span>
                )
        }
}

export default LessonTabsComponent
