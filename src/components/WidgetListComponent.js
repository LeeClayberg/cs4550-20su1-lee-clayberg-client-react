import React from "react";

class WidgetListComponent extends React.Component {
    state = {
    }

    componentDidMount() {

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
                            <div className="widget-item">
                                <div className="row">
                                    <div className="col-6 wbdv-widget-top-col">
                                        Heading Widget
                                    </div>
                                    <div className="col-6 wbdv-widget-top-col">
                                        <div
                                            className="btn btn-danger float-right wbdv-widget-x-btn">
                                            <i className="fa fa-times"/>
                                        </div>
                                        <select
                                            className="custom-select float-right wbdv-type-select">
                                            <option value="HEADING" selected>Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                        </select>
                                        <div
                                            className="btn btn-warning float-right wbdv-widget-btn">
                                            <i className="fa fa-arrow-down"/>
                                        </div>
                                        <div
                                            className="btn btn-warning float-right wbdv-widget-btn">
                                            <i className="fa fa-arrow-up"/>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" className="form-control wbdv-widget-vertical"
                                       placeholder="Heading text"/>
                                <select className="form-control wbdv-widget-vertical">
                                    <option selected>Choose Size</option>
                                    <option>Heading 1</option>
                                    <option>Heading 2</option>
                                    <option>Heading 3</option>
                                </select>
                                <input type="text" className="form-control wbdv-widget-vertical"
                                       placeholder="Widget name"/>
                                <h3>Preview</h3>
                                <h1>Heading text</h1>
                            </div>
                            <div className="col-12">
                                <div className="btn btn-danger float-right wbdv-widget-add">
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