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
        <tr className={this.props.selected ? 'table-primary' : ''}
            onClick={() => this.props.selectCourse(this.state.course._id)}>
            <td className="large-cell align-middle">
                <div className="form-group row">
                    <div className="col-1 doc-icon">
                        <span className={this.props.selected ? 'selected-white' : ''}>
                            <i className="fa fa-file-text wbdv-row wbdv-icon align-middle"></i>
                        </span>
                    </div>
                    {
                        !this.state.editing &&
                        <div className={this.props.selected ?
                                        'col-11 text-truncate title-text selected-white' :
                                        'col-11 text-truncate title-text sharp-blue'}>
                                <Link to={`/editor/${this.state.course._id}`}>
                                    <span className={this.props.selected ? 'selected-white' : ''}>
                                        {this.state.course.title}
                                    </span>
                                </Link>
                        </div>
                    }
                    {
                        this.state.editing &&
                        <div className="col-11">
                            <input
                                className="form-control align-middle"
                                onChange={(event) => this.updateCourseTitle(event.target.value)}
                                value={this.state.course.title}/>
                        </div>
                    }
                </div>
            </td>
            <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">
                <span className={this.props.selected ? 'selected-white' : ''}>
                    {this.state.course.owner}
                </span>
            </td>
            <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">
                <span className={this.props.selected ? 'selected-white' : ''}>
                    {this.state.course.modified}
                </span>
            </td>
            <td className="small-cell align-middle selected-white">
                {
                    !this.state.editing && this.props.selected &&
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
