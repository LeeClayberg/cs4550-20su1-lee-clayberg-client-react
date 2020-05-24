import React from "react";

const TopicPillsComponent = () =>
    <div className="topics">
        <ul className="nav nav-pills nav-fill wbdv-topic-pill-list">
            <a className="nav-item topic-link wbdv-topic-pill">Topic 1</a>
            <a className="nav-item topic-link active wbdv-topic-pill">Topic 2</a>
            <a className="nav-item topic-link wbdv-topic-pill">Topic 3</a>
            <a className="nav-item topic-link wbdv-topic-pill">Topic 4</a>
            <a className="topic-plus align-middle" align="center">
                <i className="fa fa-plus fa-sm wbdv-topic-add-btn"></i>
            </a>
        </ul>
    </div>

export default TopicPillsComponent