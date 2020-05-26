import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent
  extends React.Component
{
  render() {
    return(
      <div>
        <table className="table">
          <thead>
          <tr>
            <th className="d-table-cell wbdv-large-cell wbdv-header-height align-middle wbdv-dark-gray wbdv-header wbdv-title">
              Title
              <i className="fa fa-caret-up wbdv-drop-down-arrow"></i>
            </th>
            <th className="d-none d-md-table-cell wbdv-small-cell wbdv-header-height align-middle wbdv-dark-gray wbdv-header wbdv-owner">
              Owned by
              <i className="fa fa-caret-down wbdv-drop-down-arrow"></i>
            </th>
            <th className="d-none d-md-table-cell wbdv-small-cell wbdv-header-height align-middle wbdv-last-modified-size wbdv-dark-gray wbdv-header wbdv-last-modified">
              Last modified by me
            </th>
            <th className="wbdv-small-cell wbdv-header-height align-middle wbdv-dark-gray"
                align="center">
              <div>
                  <i className="fa fa-th wbdv-row-button-spacing"
                      onClick={() =>
                          this.props.setLayout('grid')}/>
                <a className="wbdv-header wbdv-sort">
                  <i className="fa fa-sort-alpha-asc wbdv-row-button-spacing"></i>
                </a>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.courses.map(course =>
              <CourseRowComponent
                deleteCourse={this.props.deleteCourse}
                selectCourse={this.props.selectCourse}
                key={course._id}
                course={course}
                selected={this.props.selected === course._id}/>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}
