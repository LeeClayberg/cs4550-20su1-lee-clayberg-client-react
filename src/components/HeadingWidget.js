import React from "react";

class HeadingWidget extends React.Component {
    render() {
        return (
            <span>
                <input type="text" className="form-control wbdv-widget-vertical"
                       placeholder="Heading text"
                       value={this.props.text}
                       onChange={(event) => this.props.updateText(event.target.value)}/>
                <select className="form-control wbdv-widget-vertical"
                        value={this.props.style}
                        onChange={(event) => this.props.updateStyle(event.target.value)}>
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </span>
        )
    }
}

export default HeadingWidget;