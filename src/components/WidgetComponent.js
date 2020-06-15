import React from "react";

class WidgetComponent extends React.Component {
    state = {
        name: "",
        type: "",
        widgetOrder: 0,
        style: 1,
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

    updateType = (type) => {
        this.setState(prevState => ({
            type: type
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, type: type
        });
    }

    updateText = (text) => {
        this.setState(prevState => ({
            text: text
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, text: text
        });
    }

    updateStyle = (style) => {
        this.setState(prevState => ({
            style: style
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, style: style
        });
    }

    updateName = (name) => {
        this.setState(prevState => ({
            name: name
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, name: name
        });
    }

    preview = () =>
        this.state.type == 'paragraph' ? <p>{this.state.text}</p> :
        this.state.style == 1  ? <h1>{this.state.text}</h1> :
        this.state.style == 2  ? <h2>{this.state.text}</h2> :
        this.state.style == 3  ? <h3>{this.state.text}</h3> :
        this.state.style == 4  ? <h4>{this.state.text}</h4> :
        this.state.style == 5  ? <h5>{this.state.text}</h5> :
        this.state.style == 6  ? <h6>{this.state.text}</h6> : null

    render() {
        return (
            <span>
                {
                    !this.props.preview &&
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
                                <select className="custom-select float-right wbdv-type-select"
                                        value={this.state.type}
                                        onChange={(event) => this.updateType(event.target.value)}>
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
                        {
                            this.state.type == 'heading' &&
                            <span>
                                <input type="text" className="form-control wbdv-widget-vertical"
                                       placeholder="Heading text"
                                       value={this.state.text}
                                       onChange={(event) => this.updateText(event.target.value)}/>
                                < select className="form-control wbdv-widget-vertical"
                                    value={this.state.style}
                                    onChange={(event) => this.updateStyle(event.target.value)}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
                            </span>
                        }
                        {
                            this.state.type == 'paragraph' &&
                            <textarea className="form-control wbdv-widget-vertical"
                                      value={this.state.text}
                                      onChange={(event) => this.updateText(event.target.value)}
                                      placeholder="Paragraph text"/>
                        }
                        <input type="text" className="form-control wbdv-widget-vertical"
                               placeholder="Widget name"
                               value={this.state.name}
                               onChange={(event) => this.updateName(event.target.value)}/>
                        <h3>Preview</h3>
                        {
                            this.preview()
                        }
                    </div>
                }
                {
                    this.props.preview && this.preview()
                }
            </span>
        )
    }
}

export default WidgetComponent;