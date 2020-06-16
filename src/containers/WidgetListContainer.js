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
                    widgets: widgetsForTopic.sort((a,b) => (a.widgetOrder > b.widgetOrder) ? 1 : -1)
                }))
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
                    let createWidgets = [...widgets];
                    createWidgets.filter(widget => !widgetsForTopic.includes(widget.id));
                    let deleteWidgets = [...widgetsForTopic];
                    deleteWidgets.filter(widget => !widgets.includes(widget.id));
                    let updateWidgets = [...widgets];
                    updateWidgets.filter(widget => widgetsForTopic.includes(widget.id));
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
(WidgetListComponent)

export default WidgetListContainer