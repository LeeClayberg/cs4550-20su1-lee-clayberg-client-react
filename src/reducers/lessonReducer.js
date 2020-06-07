
const initialState = {
  newLessonTitle: 'New Lesson',
  lessons: []
}

const lessonReducer = (state=initialState, action) => {
  switch(action.type) {
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
      }
    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(
            lesson => lesson._id === action.updatedLesson._id ?
                      action.updatedLesson : lesson )
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [...state.lessons, action.newLesson]
      }
    default:
      return state
  }
}

export default lessonReducer
