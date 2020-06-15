import React from "react";

class WidgetComponent extends React.Component {
    state = {
        name: "",
        type: "",
        widgetOrder: 0,
        style: 0,
        text: ""
    }

    componentDidMount() {
        this.setState({
             name: this.props.widget.name,
             type: this.props.widget.type,
             widgetOrder: this.props.widget.widgetOrder,
             style: this.props.widget.style,
             text: this.props.widget.text
        })
    }

    render() {
        return (
            <div className="widget-item">
                <div className="row">
                    <div className="col-6 wbdv-widget-top-col">
                        Heading Widget
                    </div>
                    <div className="col-6 wbdv-widget-top-col">
                        <div className="btn btn-danger float-right wbdv-widget-x-btn"
                            onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className="fa fa-times"/>
                        </div>
                        <select
                            className="custom-select float-right wbdv-type-select">
                            <option value="heading" selected>Heading</option>
                            <option value="paragraph">Paragraph</option>
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
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                <input type="text" className="form-control wbdv-widget-vertical"
                       placeholder="Widget name"/>
                <h3>Preview</h3>
                <h1>Heading text</h1>
            </div>
        )
    }
}

export default WidgetComponent;