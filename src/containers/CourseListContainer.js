import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService"

class CourseListContainer
  extends React.Component
{
  state = {
    layout: this.props.match.params.layout,
    courses: [],
    newCourseTitle: 'New Course'
  }

  componentDidMount() {
    courseService.findAllCourses()
      .then(actualArrayOfCourses =>
        this.setState({
          courses: actualArrayOfCourses
        }))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.match.params.layout !== this.props.match.params.layout) {
      this.setState({
        layout: this.props.match.params.layout
      })
    }
  }

  setLayout = (layout) => {
    this.props.history.push(`/${layout}/courses`)
  }

  deleteCourse = (courseToDelete) =>
    courseService.deleteCourse(courseToDelete._id)
      .then(status => this.setState(prevState => ({
        courses: prevState
          .courses.filter(course => course !== courseToDelete)
      })))

  addCourse = (title) =>
    courseService.createCourse({
      title: title,
      owner: 'me',
      modified: (new Date()).toDateString()
    })
      .then(theActualNewCourse =>
        this.setState((prevState) => {
        return {
          courses: [
            ...prevState.courses,
            theActualNewCourse
          ]
        }
      }))

  render() {

    console.log(this.props)

    return(
      <div>
          <div className="container">
              <nav className="navbar fixed-top navbar-dark bg-primary">
                  <div className="form-inline row">
                      <div>
                          <i className="fa fa-bars hamburger wbdv-hamburger"></i>
                      </div>
                      <div
                          className="d-none d-md-block course-manager-style wbdv-label wbdv-course-manager">
                          Course Manager
                      </div>
                      <div className="search-area">
                          <input
                              className="search-bar font-italic font-weight-bold wbdv-field wbdv-new-course"
                              type="text"
                              placeholder="New Course Title"
                              value={this.state.newCourseTitle}
                              onChange={(event) => this.setState({
                                  newCourseTitle: event.target.value
                              })}
                              title="Username"/>
                      </div>
                      <div className="add-button-area">
                          <button
                              className="btn btn-danger add-btn-top wbdv-button wbdv-add-course"
                              onClick={() => this.addCourse(this.state.newCourseTitle)}>
                              <i className="fa fa-plus "></i>
                          </button>
                      </div>
                  </div>
              </nav>

              <table className="table">
                  <tbody>
                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              CS5500 Software Engineering Graduate
                          </a>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">6:45
                          PM
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>

                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              CS4550 Software Engineering Undergraduate
                          </a>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">6:45
                          PM
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>

                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              CS4500 WebDev Undergraduate
                          </a>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">6:45
                          PM
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>

                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              CS5610 WebDev Graduate
                          </a>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">6:45
                          PM
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>

                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              CS5200 Intro to Databases
                          </a>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">6:44
                          PM
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>
                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              WEBDEV 2 - React
                          </a>
                          <i className="fa fa-users shared-icon"></i>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">May
                          4, 2018
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>
                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              WEBDEV Syllabus
                          </a>
                          <i className="fa fa-users shared-icon"></i>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">May
                          3, 2018
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>

                  <tr className="wbdv-row wbdv-course">
                      <td className="large-cell align-middle text-truncate wbdv-row wbdv-title">
                          <i className="fa fa-file-text doc-icon wbdv-row wbdv-icon"></i>
                          <a className="course-link wbdv-row wbdv-title"
                             href="../course-editor/course-editor.template.client.html">
                              WEBDEV 1 - JavaScript, Java, SQL
                          </a>
                          <i className="fa fa-users shared-icon"></i>
                      </td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-owner">me</td>
                      <td className="d-none d-md-table-cell small-cell align-middle row-light-text wbdv-row wbdv-modified-date">May
                          3, 2018
                      </td>
                      <td className="small-cell align-middle dark-gray">
                          <a className="float-right btn x-button-spacing font-weight-bold wbdv-row wbdv-button wbdv-delete">X</a>
                      </td>
                  </tr>
                  </tbody>
              </table>

              <button className="wbdv-bottom-right-10px btn btn-danger">
                  <i className="fa fa-plus fa-lg"></i>
              </button>

              <br/>
              {
                  this.state.layout === 'table' &&
                  <div>
                      <button
                          onClick={() =>
                              this.setLayout('grid')}>
                          Grid
                      </button>
                      <CourseTableComponent
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}/>
                  </div>
              }
              {
                  this.state.layout === 'grid' &&
                  <div>
                      <button
                          onClick={() =>
                              this.setLayout('table')}>
                          Table
                      </button>
                      <CourseGridComponent courses={this.state.courses}/>
                  </div>
              }
          </div>
      </div>
    )
  }
}

export default CourseListContainer
