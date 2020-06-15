import React from "react";
import WidgetComponent from "./WidgetComponent";

class WidgetListComponent extends React.Component {
    state = {
    }

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.params.topicId)
    }

    addWidget = () => {
        this.props.createWidget(this.props.params.topicId, {
            name: "",
            topicId: this.props.params.topicId,
            type: "heading",
            widgetOrder: this.props.widgets.length,
            text: ""
        })
    }

    render() {
        return (
            <span>
                {
                    this.props.params.topicId &&
                    <div className="wbdv-widgets ">
                        <div className="row wbdv-widgets-top">
                            <div className="btn btn-success wbdv-top-spacing">
                                Save
                            </div>
                            <div className="wbdv-preview-text wbdv-top-spacing">
                                Preview
                            </div>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input"
                                       id="customSwitches"/>
                                <label className="custom-control-label" htmlFor="customSwitches"/>
                            </div>
                        </div>
                        <ul className="list-group">
                            {
                            this.props.widgets.map(widget =>
                                 <WidgetComponent widget={widget} {...this.props.match}/>)
                            }
                            <div className="col-12">
                                <div className="btn btn-danger float-right wbdv-widget-add"
                                    onClick={() => this.addWidget()}>
                                    <i className="fa fa-plus-circle"/>
                                </div>
                            </div>
                        </ul>
                    </div>
                }
            </span>
        )
    }
}

export default WidgetListComponent;