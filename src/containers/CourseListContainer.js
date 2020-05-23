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
      this.setState({
        layout: this.props.match.params.layout
      })
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

              <button className="wbdv-bottom-right-10px btn btn-danger">
                  <i className="fa fa-plus fa-lg"></i>
              </button>

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
                          setLayout={this.setLayout}/>
                  </div>
              }
          </div>
      </div>
    )
  }
}

export default CourseListContainer
