import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService"

class CourseManagerContainer
  extends React.Component
{
  state = {
    layout: this.props.match.params.layout,
    courses: [],
    newCourseTitle: 'New Course',
    selected: null
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
        courseService.findAllCourses()
          .then(actualArrayOfCourses =>
            this.setState({
              layout: this.props.match.params.layout,
              courses: actualArrayOfCourses
            }))
    }
  }

  setLayout = (layout) => {
    this.props.history.push(`/${layout}/courses`)
  }


  selectCourse  = (courseId) => {this.setState({
    selected: courseId
  })}

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
    return(
      <div>
          <div className="container">
              <nav className="navbar fixed-top navbar-dark bg-primary">
                  <div className="form-inline row">
                      <div>
                          <i className="fa fa-bars fa-lg wbdv-hamburger wbdv-hamburger"></i>
                      </div>
                      <div
                          className="d-none d-md-block wbdv-course-manager-style wbdv-label wbdv-course-manager">
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
                      <div className="wbdv-add-button-area">
                          <button
                              className="btn btn-danger wbdv-add-btn-top wbdv-button wbdv-add-course"
                              onClick={() => this.addCourse(this.state.newCourseTitle)}>
                              <i className="fa fa-plus "></i>
                          </button>
                      </div>
                  </div>
              </nav>

              {
                  this.state.layout === 'table' &&
                  <div>
                      <CourseTableComponent
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}
                          selectCourse={this.selectCourse}
                          selected={this.state.selected}
                          setLayout={this.setLayout}/>
                  </div>
              }
              {
                  this.state.layout === 'grid' &&
                  <div>
                      <CourseGridComponent
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}
                          selectCourse={this.selectCourse}
                          selected={this.state.selected}
                          setLayout={this.setLayout}/>
                  </div>
              }

              <button className="wbdv-bottom-right-10px btn btn-danger">
                  <i className="fa fa-plus fa-lg"></i>
              </button>
          </div>
      </div>
    )
  }
}

export default CourseManagerContainer
