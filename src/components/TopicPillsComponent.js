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
                             <il className="nav-item topic-link wbdv-topic-pill">{topic.title}</il>)
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