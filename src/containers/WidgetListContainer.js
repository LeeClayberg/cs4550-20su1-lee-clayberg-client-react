import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        widgets: state.widgetReducer.widgets,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            WidgetService.findWidgetsForTopic(topicId)
                .then(widgetsForTopic => dispatch({
                    type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                    widgets: widgetsForTopic
                }))
        },
        findLocalWidgetsForTopic: () => {
            dispatch({
                type: 'FIND_ALL_LOCAL_WIDGETS_FOR_TOPIC'
            })
        },
        updateWidget: (widgetId, newWidgetData) => {
            dispatch({
                type: 'UPDATE_WIDGET',
                updatedWidget: newWidgetData
            })
        },
        createWidget: (topicId, newWidget) => {
            dispatch({
                type: "CREATE_WIDGET",
                newWidget: newWidget
            })
        },
        deleteWidget: (widgetId) => {
            dispatch({
                type: "DELETE_WIDGET",
                widgetId: widgetId
            })
        }
    }
}

const WidgetListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetListComponent)

export default WidgetListContainer