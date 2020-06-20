import React from "react";

class ImageWidget extends React.Component {
    render() {
        return (
            <span>
                <input type="text" className="form-control wbdv-widget-vertical"
                      placeholder="Image URL"
                      value={this.props.src}
                      onChange={(event) => this.props.updateSrc(event.target.value)}/>
            </span>
        )
    }
}

export default ImageWidget;