import React from "react";

class WidgetListComponent extends React.Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="wbdv-widgets ">
                <div className="row wbdv-widgets-top">
                    <div className="btn btn-success wbdv-top-spacing">
                        Save
                    </div>
                    <div className="wbdv-preview-text wbdv-top-spacing">
                        Preview
                    </div>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                        <label className="custom-control-label" htmlFor="customSwitches"/>
                    </div>
                </div>
                <ul className="list-group">
                    <div className="widget-item">
                        Heading Widget
                        <div className="btn btn-warning float-right wbdv-widget-btn">
                            <i className="btn fa fa-arrow-up"/>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default WidgetListComponent;