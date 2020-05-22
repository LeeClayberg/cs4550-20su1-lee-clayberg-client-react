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
            <td className="large-cell align-middle">
                <div className="form-group row text-truncate">
                    <div className="col-xs-1">
                        <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon align-middle"></i>
                    </div>
                    {
                        !this.state.editing &&
                        <Link className="align-middle title-text" to={`/editor/${this.state.course._id}`}>
                            {this.state.course.title}
                        </Link>
                    }
                    {
                        this.state.editing &&
                        <div className="col-xs-11">
                            <input
                                className="form-control align-middle"
                                onChange={(event) => this.updateCourseTitle(event.target.value)}
                                value={this.state.course.title}/>
                        </div>
                    }
                </div>
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
                    <div className="float-right">
                        <i className="fa fa-pencil fa-lg row-button-spacing"
                           onClick={() => this.setEditing(true)}/>
                        <i className="fa fa-trash fa-lg row-button-spacing"
                            onClick={() => this.props.deleteCourse(this.props.course)}/>
                    </div>
                }
                {
                    this.state.editing &&
                    <i className="fa fa-check fa-lg row-button-spacing float-right"
                        onClick={this.ok}/>
                }
            </td>
        </tr>

    )
  }
}
