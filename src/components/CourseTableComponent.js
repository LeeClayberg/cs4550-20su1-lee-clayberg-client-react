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
            <th className="d-table-cell large-cell header-height align-middle dark-gray wbdv-header wbdv-title">Title</th>
            <th className="d-none d-md-table-cell small-cell header-height align-middle dark-gray wbdv-header wbdv-owner">
              Owned by
              <i className="fa fa-caret-down drop-down-arrow"></i>
            </th>
            <th className="d-none d-md-table-cell small-cell header-height align-middle last-modified-size dark-gray wbdv-header wbdv-last-modified">
              Last modified by me
            </th>
            <th className="small-cell header-height align-middle dark-gray"
                align="center">
              <div className="float-middle">
                <a className="wbdv-button wbdv-grid-layout wbdv-list-layout">
                  <i className="fa fa-th row-button-spacing"></i>
                </a>
                <a className="wbdv-header wbdv-sort">
                  <i className="fa fa-sort-alpha-asc row-button-spacing"></i>
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
                key={course._id}
                course={course}/>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}
