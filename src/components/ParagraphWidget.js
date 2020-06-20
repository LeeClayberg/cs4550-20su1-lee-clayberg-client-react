import React from "react";

class ParagraphWidget extends React.Component {
    render() {
        return (
            <span>
                <textarea className="form-control wbdv-widget-vertical"
                          value={this.props.text}
                          onChange={(event) => this.props.updateText(event.target.value)}
                          placeholder="Paragraph text"/>
            </span>
        )
    }
}

export default ParagraphWidget;