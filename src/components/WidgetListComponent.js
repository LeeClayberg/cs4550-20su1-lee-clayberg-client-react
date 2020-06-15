import React from "react";
import WidgetComponent from "./WidgetComponent";

class WidgetListComponent extends React.Component {
    state = {
        preview: false
    }

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.params.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId);
        }
    }

    addWidget = () => {
        this.props.createWidget(this.props.params.topicId, {
            name: "",
            id: new Date().getTime() - Math.round(new Date().getTime()/100000)*100000,
            topicId: this.props.params.topicId,
            type: "heading",
            widgetOrder: this.props.widgets.length,
            style: 1,
            text: ""
        })
    }

    updatePreview = (checked) => {
        this.setState(prevState => ({
            preview: checked
        }))
    };

    render() {
        return (
            <span>
                {
                    this.props.params.topicId &&
                    <div className="wbdv-widgets ">
                        <div className="row wbdv-widgets-top">
                            <div className="btn btn-success wbdv-top-spacing"
                                onClick={() => this.props.saveWidgets(this.props.params.topicId, this.props.widgets)}>
                                Save
                            </div>
                            <div className="wbdv-preview-text wbdv-top-spacing">
                                Preview
                            </div>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input"
                                       checked={this.state.preview}
                                       onChange={(event) => this.updatePreview(event.target.checked)}
                                       id="customSwitches"/>
                                <label className="custom-control-label" htmlFor="customSwitches"/>
                            </div>
                        </div>
                        <ul className="list-group">
                            {
                            this.props.widgets.map(widget =>
                                 <WidgetComponent widget={widget} deleteWidget={this.props.deleteWidget}
                                                  updateWidget={this.props.updateWidget}
                                                  preview={this.state.preview}/>)
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