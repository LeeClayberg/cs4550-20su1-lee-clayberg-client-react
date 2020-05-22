import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course
  }

  setEditing = (editing) =>
    this.setState({editing: editing})

  ok = () =>
    courseService.updateCourse(
      this.state.course._id,
      this.state.course)
      .then(status => this.setEditing(false))

  updateCourseTitle = (newTitle) =>
    this.setState(prevState => ({
      course: {
        ...prevState.course,
        title: newTitle
      }
    }))

  render() {
    return(
        <tr className="wbdv-row wbdv-course">
            <td className="large-cell align-middle text-truncate">
                <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                {
                    !this.state.editing &&
                    <Link to={`/editor/${this.state.course._id}`}>
                        {this.state.course.title}
                    </Link>
                }
                {
                    this.state.editing &&
                    <input
                        className="form-control"
                        onChange={(event) => this.updateCourseTitle(event.target.value)}
                        value={this.state.course.title}/>
                }
            </td>
            <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">
                {this.state.course.owner}
            </td>
            <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">
                {this.state.course.modified}
            </td>
            <td className="small-cell align-middle dark-gray">
                {
                    !this.state.editing &&
                    <span className="float-right">
                        <i className="fa fa-pencil fa-lg row-button-spacing"
                           onClick={() => this.setEditing(true)}>
                        </i>
                        <i className="fa fa-trash fa-lg row-button-spacing"
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                        </i>
                    </span>
                }
            </td>
        </tr>
        /*
      <tr className={this.state.editing ? 'table-primary' : ''}>
        <td>
          {
            !this.state.editing &&
              <Link to={`/editor/${this.state.course._id}`}>
                {this.state.course.title}
              </Link>
          }
          {
            this.state.editing &&
            <input
              className="form-control"
              onChange={(event) => this.updateCourseTitle(event.target.value)}
              value={this.state.course.title}/>
          }
        </td>
        <td>{this.state.course.owner}</td>
        <td>{this.state.course.modified}</td>
        <td>
          {
            !this.state.editing &&
            <button
              className="btn btn-primary"
              onClick={() => this.setEditing(true)}>
              Edit
            </button>
          }
          {
            this.state.editing &&
            <span>
              <button onClick={this.ok}>
                Ok</button>
              <button
                className="btn btn-danger"
                onClick={
                  () => this.props.deleteCourse(this.props.course)}>
                Delete</button>
            </span>
          }
        </td>
      </tr>*/
    )
  }
}
