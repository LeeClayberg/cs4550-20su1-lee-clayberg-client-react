import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import LessonService from "../services/LessonService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons,
        newLessonTitle: state.lessonReducer.newLessonTitle,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonForModule: (lessonId) => {
            LessonService.findLessonsForModule(lessonId)
                .then(lessonsForTheModule => dispatch({
                                                          type: 'FIND_LESSONS_FOR_MODULE',
                                                          lessons: lessonsForTheModule
                                                      }))
        },
        updateLesson: (lessonId, newLessonData) => {
            LessonService.updateModule(lessonId, newLessonData)
                .then(status => dispatch({
                                             type: 'UPDATE_LESSON',
                                             updatedLesson: newLessonData
                                         }))
        },
        createLesson: (moduleId, newLesson) => {
            LessonService.createModule(moduleId, newLesson)
                .then(actualNewLesson => dispatch({
                                                      type: "ADD_LESSON",
                                                      newLesson: actualNewLesson
                                                  }))
        },
        deleteLesson: (lessonId) => {
            LessonService.deleteModule(lessonId)
                .then(status => dispatch({
                                             type: "DELETE_LESSON",
                                             lessonId: lessonId
                                         }))
        }
    }
}

const LessonTabsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabsComponent)

export default LessonTabsContainer