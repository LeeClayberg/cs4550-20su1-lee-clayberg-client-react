
const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.updatedWidget.id ?
                             action.updatedWidget : widget )
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "FIND_ALL_LOCAL_WIDGETS_FOR_TOPIC":
            return state;
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.newWidget]
            }
        default:
            return state
    }
}

export default widgetReducer