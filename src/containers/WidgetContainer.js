import React from "react";
import WidgetListComponent from "../components/WidgetListComponent"
import ImageWidget from "../components/ImageWidget";
import HeadingWidget from "../components/HeadingWidget";
import ParagraphWidget from "../components/ParagraphWidget";

class WidgetContainer extends React.Component {
    state = {
        name: "",
        type: "",
        widgetOrder: 0,
        style: 1,
        text: "",
        value: "unordered",
        src: ""
    }

    componentDidMount() {
        this.setState({
             name: this.props.widget.name,
             type: this.props.widget.type,
             widgetOrder: this.props.widget.widgetOrder,
             style: this.props.widget.style,
             text: this.props.widget.text,
             value: this.props.widget.value,
             src: this.props.widget.src
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.widget.id != this.props.widget.id) {
            this.setState({
                              name: this.props.widget.name,
                              type: this.props.widget.type,
                              widgetOrder: this.props.widget.widgetOrder,
                              style: this.props.widget.style,
                              text: this.props.widget.text,
                              value: this.props.widget.value,
                              src: this.props.widget.src
                          })
        }
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

    updateSrc = (src) => {
        this.setState(prevState => ({
            src: src
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, src: src
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

    updateValue = (value) => {
        this.setState(prevState => ({
            value: value
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, value: value
        });
    }

    updateType = (type) => {
        this.setState(prevState => ({
            type: type
        }));
        this.props.updateWidget(this.props.widget.id, {
            ...this.props.widget, type: type
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
        this.state.type == 'image' ? <img src={this.state.src} className="wbdv-widget-img" alt="Picture goes here"/> :
        this.state.type == 'list' && this.state.value == 'unordered' ? <ul>{this.state.text.split('\n').map(line => <li>{line}</li>)}</ul> :
        this.state.type == 'list' && this.state.value == 'ordered' ? <ol>{this.state.text.split('\n').map(line => <li>{line}</li>)}</ol> :
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
                                {this.state.type} Widget
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
                                    <option value="list">List</option>
                                    <option value="image">Image</option>
                                </select>
                                <div className="btn btn-warning float-right wbdv-widget-btn"
                                     onClick={() => this.props.moveDownWidget(this.props.widget)}>
                                    <i className="fa fa-arrow-down"/>
                                </div>
                                <div className="btn btn-warning float-right wbdv-widget-btn"
                                     onClick={() => this.props.moveUpWidget(this.props.widget)}>
                                    <i className="fa fa-arrow-up"/>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.type == 'heading' &&
                            <HeadingWidget text={this.state.text} style={this.state.style}
                                           updateText={this.updateText} updateStyle={this.updateStyle}/>
                        }
                        {
                            this.state.type == 'paragraph' &&
                            <ParagraphWidget text={this.state.text} updateText={this.updateText}/>
                        }
                        {
                            this.state.type == 'list' &&
                            <WidgetListComponent text={this.state.text} value={this.state.value}
                                                 updateText={this.updateText} updateValue={this.updateValue}/>
                        }
                        {
                            this.state.type == 'image' &&
                            <ImageWidget src={this.state.src} updateSrc={this.updateSrc}/>
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

export default WidgetContainer;