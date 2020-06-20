import {connect} from "react-redux";
import WidgetListInnerContainer from "./WidgetListInnerContainer";
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
                    widgets: widgetsForTopic.sort((a,b) => (a.widgetOrder > b.widgetOrder) ? 1 : -1)
                }))
        },
        updateWidget: (widgetId, newWidgetData) => {
            dispatch({
                type: 'UPDATE_WIDGET',
                updatedWidget: newWidgetData
            })
        },
        createWidget: (newWidget) => {
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
        },
        moveUpWidget: (moveWidget) => {
            dispatch({
                         type: "MOVE_UP",
                         moveWidget: moveWidget
                     })
        },
        moveDownWidget: (moveWidget) => {
            dispatch({
                         type: "MOVE_DOWN",
                         moveWidget: moveWidget
                     })
        },
        saveWidgets: (topicId, widgets) => {
            WidgetService.findWidgetsForTopic(topicId)
                .then(widgetsForTopic => {
                    widgets.map((widget, index) => widget.widgetOrder = index);
                    let widgetIds = widgets.map(widget => widget.id);
                    let oldWidgetIds = widgetsForTopic.map(widget => widget.id);
                    let createWidgets = widgets.filter(widget => !oldWidgetIds.includes(widget.id));
                    let deleteWidgets = widgetsForTopic.filter(widget => !widgetIds.includes(widget.id));
                    let updateWidgets = widgets.filter(widget => oldWidgetIds.includes(widget.id));
                    createWidgets.map(widget => WidgetService.createWidget(topicId, widget));
                    deleteWidgets.map(widget => WidgetService.deleteWidget(widget.id));
                    updateWidgets.map(widget => WidgetService.updateWidget(widget.id, widget));
                    dispatch({
                        type: "SAVE_ALL",
                    })
                })
        }
    }
}

const WidgetListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetListInnerContainer)

export default WidgetListContainer