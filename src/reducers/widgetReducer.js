
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
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.newWidget]
            }
        case "MOVE_UP":
            return action.widget.widgetOrder > 0 ?
                {...state, widgets: [state.widgets[action.widget.widgetOrder - 1], state.widgets[action.widget.widgetOrder]]} :
                state
        case "MOVE_DOWN":
            return action.widget.widgetOrder < state.widgets.length - 1 ?
                {...state, widgets: [state.widgets[action.widget.widgetOrder + 1], state.widgets[action.widget.widgetOrder]]} :
                   state
        case "SAVE_ALL":
            return state
        default:
            return state
    }
}

export default widgetReducer