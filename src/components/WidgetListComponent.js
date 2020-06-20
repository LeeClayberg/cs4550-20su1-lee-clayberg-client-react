import React from "react";

class WidgetListComponent extends React.Component {
    render() {
        return (
            <span>
                <textarea className="form-control wbdv-widget-vertical"
                        value={this.props.text}
                        onChange={(event) => this.props.updateText(event.target.value)}
                        placeholder="Enter one list item per line"/>
                <select className="form-control wbdv-widget-vertical"
                        value={this.props.value}
                        onChange={(event) => this.props.updateValue(event.target.value)}>
                    <option value="unordered">Unordered list</option>
                    <option value="ordered">Ordered list</option>
                </select>
            </span>
        )
    }
}

export default WidgetListComponent;