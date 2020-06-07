import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    unsaved_changes: this.props.course,
    course: this.props.course
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.selected && !this.props.selected) {
          this.setState({
              editing: false,
              unsaved_changes: this.state.course
          })
      }
  }

  setEditing = (editing) =>
    this.setState({editing: editing})

  ok = () => {
      this.setState({
          course: this.state.unsaved_changes
      })
      courseService.updateCourse(
          this.state.unsaved_changes._id,
          this.state.unsaved_changes)
          .then(status => this.setEditing(false))
  }

  updateCourseTitle = (newTitle) =>
    this.setState(prevState => ({
        unsaved_changes: {
        ...prevState.unsaved_changes,
        title: newTitle
      }
    }))

  render() {
    return(
        <tr className={this.props.selected ? 'table-primary' : ''}
            onClick={() => this.props.selectCourse(this.state.course._id)}>
            <td className="wbdv-large-cell align-middle">
                <div className="form-group row">
                    <div className="col-1 wbdv-doc-icon">
                        <span className={this.props.selected ? 'wbdv-selected-white' : ''}>
                            <i className="fa fa-file-text wbdv-row wbdv-icon align-middle"></i>
                        </span>
                    </div>
                    {
                        !this.state.editing &&
                        <div className="col-11 text-truncate wbdv-title-text">
                                <Link to={`/editor/${this.state.course._id}`}
                                      className={this.props.selected ?
                                                 'wbdv-selected-white' :
                                                 'wbdv-sharp-blue'}>
                                    <span className={`wbdv-manager-link ${this.props.selected ? 'wbdv-selected-white' : ''}`}>
                                        {this.state.course.title}
                                    </span>
                                </Link>
                        </div>
                    }
                    {
                        this.state.editing && this.props.selected &&
                        <div className="col-11">
                            <input
                                className="form-control align-middle"
                                onChange={(event) => this.updateCourseTitle(event.target.value)}
                                value={this.state.unsaved_changes.title}/>
                        </div>
                    }
                </div>
            </td>
            <td className="d-none d-md-table-cell wbdv-small-cell align-middle wbdv-row-light-text wbdv-row wbdv-owner">
                <span className={this.props.selected ? 'wbdv-selected-white' : ''}>
                    {this.state.course.owner}
                </span>
            </td>
            <td className="d-none d-md-table-cell wbdv-small-cell align-middle wbdv-row-light-text wbdv-row wbdv-modified-date">
                <span className={this.props.selected ? 'wbdv-selected-white' : ''}>
                    {this.state.course.modified}
                </span>
            </td>
            <td className="wbdv-small-cell align-middle wbdv-selected-white">
                {
                    !this.state.editing && this.props.selected &&
                    <div className="float-right">
                        <i className="fa fa-pencil fa-lg wbdv-row-button-spacing"
                           onClick={() => this.setEditing(true)}/>
                        <i className="fa fa-trash fa-lg wbdv-row-button-spacing"
                            onClick={() => this.props.deleteCourse(this.props.course)}/>
                    </div>
                }
                {
                    this.state.editing &&
                    <i className="fa fa-check fa-lg wbdv-row-button-spacing float-right"
                        onClick={this.ok}/>
                }
            </td>
        </tr>

    )
  }
}
