import React from "react";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: 'New Topic',
        editingTopic: {},
        selected: this.props.params.topicId
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId);
        }
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.setState({
                 selected: this.props.params.topicId
            });
        }
    }

    render() {
        return (
            <div className="wbdv-topics">
                <ul className="nav nav-pills nav-fill wbdv-topic-pill-list">
                    {
                        this.props.topics.map(topic =>
                             <Link className={`nav-item topic-link wbdv-topic-pill ${this.state.selected === topic._id ? "active" : ""}`}
                                   to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic._id}`}
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
                                         <i className="btn fa fa-times float-right wbdv-topic-button"
                                            onClick={() => this.props.deleteTopic(topic._id)}/>
                                         <i className="btn fa fa-check float-right wbdv-topic-button"
                                            onClick={() => {
                                               this.props.updateTopic(this.state.editingTopic._id, this.state.editingTopic)
                                               this.setState({editingTopic: {}})}}/>
                                    </span>
                                 }
                                 {
                                     this.state.editingTopic._id !== topic._id && this.state.selected === topic._id &&
                                     <i className="btn fa fa-pencil float-right wbdv-topic-button"
                                        onClick={() => this.setState({editingTopic: topic})}/>
                                 }
                             </Link>)
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