
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
        case "MOVE_UP": {
            let widgetIndex = state.widgets.map(widget => widget.id).indexOf(action.moveWidget.id);
            if (widgetIndex > 0) {
                let hold = state.widgets[widgetIndex];
                state.widgets[widgetIndex] = state.widgets[widgetIndex - 1];
                state.widgets[widgetIndex - 1] = hold;
            }
            return {
                ...state, widgets: [...state.widgets]
            };
        }
        case "MOVE_DOWN": {
            let widgetIndex = state.widgets.map(widget => widget.id).indexOf(action.moveWidget.id);
            if (widgetIndex < state.widgets.length - 1) {
                let hold = state.widgets[widgetIndex];
                state.widgets[widgetIndex] = state.widgets[widgetIndex + 1];
                state.widgets[widgetIndex + 1] = hold;
            }
            return {
                ...state, widgets: [...state.widgets]
            };
        }
        case "SAVE_ALL":
            return state
        default:
            return state
    }
}

export default widgetReducer