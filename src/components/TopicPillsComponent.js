import React from "react";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: 'New Topic',
        editingTopic: {},
        selected: {}
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.moduleId !== this.props.params.moduleId ||
            prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
        }
    }

    render() {
        return (
            <div className="wbdv-topics">
                <ul className="nav nav-pills nav-fill wbdv-topic-pill-list">
                    {
                        this.props.topics.map(topic =>
                             <il className={`nav-item topic-link wbdv-topic-pill ${this.state.selected === topic._id ? "active" : ""}`}
                                 onClick={() => {
                                     this.setState({
                                          selected: topic._id
                                     });
                                 }}>
                                 {
                                     this.state.editingTopic._id === topic._id &&
                                     <input value={this.state.editingTopic.title}
                                            onclick="this.select()"
                                            onChange={(e) => {
                                                const newTitle = e.target.value
                                                this.setState(prevState => ({
                                                    editingTopic: {
                                                        ...prevState.editingTopic,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}/>
                                 }
                                 {
                                     this.state.editingTopic._id !== topic._id &&
                                     topic.title
                                 }
                                 {
                                     this.state.editingTopic._id === topic._id &&
                                     <span>
                                        <i className="btn fa fa-check float-right wbdv-module-button wbdv-module-item-save-btn"
                                           onClick={() => {
                                               this.props.updateTopic(this.state.editingTopic._id, this.state.editingTopic)
                                               this.setState({editingTopic: {}})}}/>
                                    </span>
                                 }
                                 {
                                     this.state.editingTopic._id !== topic._id && this.state.selected === topic._id &&
                                     <i className="btn fa fa-pencil float-right wbdv-module-button wbdv-module-item-edit-btn"
                                        onClick={() => this.setState({editingTopic: topic})}/>
                                 }
                             </il>)
                    }
                    {
                        this.props.params.lessonId &&
                        <il className="btn wbdv-topic-plus align-middle" align="center">
                            <i className="fa fa-plus fa-sm wbdv-topic-add-btn"
                               onClick={() => this.props.createTopic(
                                   this.props.params.lessonId,
                                   {
                                       title: this.state.newTopicTitle
                                   })}/>
                        </il>
                    }
                </ul>
            </div>
        )
    }
}

export default TopicPillsComponent