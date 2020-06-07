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
        findLessonsForModule: (moduleId) => {
            LessonService.findLessonsForModule(moduleId)
                .then(lessonsForTheModule => dispatch({
                                                          type: 'FIND_LESSONS_FOR_MODULE',
                                                          lessons: lessonsForTheModule
                                                      }))
        },
        updateLesson: (lessonId, newLessonData) => {
            LessonService.updateLesson(lessonId, newLessonData)
                .then(status => dispatch({
                                             type: 'UPDATE_LESSON',
                                             updatedLesson: newLessonData
                                         }))
        },
        createLesson: (moduleId, newLesson) => {
            LessonService.createLesson(moduleId, newLesson)
                .then(actualNewLesson => dispatch({
                                                      type: "CREATE_LESSON",
                                                      newLesson: actualNewLesson
                                                  }))
        },
        deleteLesson: (lessonId) => {
            LessonService.deleteLesson(lessonId)
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