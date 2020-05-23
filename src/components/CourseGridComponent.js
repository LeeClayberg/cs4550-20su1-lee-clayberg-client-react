import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseGridComponent
  extends React.Component
{
  render() {
    return(
        <div>
          <table className="table">
            <thead>
            <tr>
              <th className="d-table-cell large-cell header-height align-middle dark-gray wbdv-header wbdv-title">
                Recent Documents
              </th>
              <th className="d-none d-md-table-cell medium-cell header-height align-middle dark-gray wbdv-header wbdv-owner">
                Owned by me
                <i className="fa fa-caret-down drop-down-arrow"></i>
              </th>
              <th className="medium-cell header-height align-middle dark-gray"
                  align="center">
                <div>
                  <i className="fa fa-th-list row-button-spacing"
                     onClick={() =>
                         this.props.setLayout('table')}/>
                  <a className="wbdv-header wbdv-sort">
                    <i className="fa fa-sort-alpha-asc row-button-spacing"></i>
                  </a>
                </div>
              </th>
            </tr>
            </thead>
          </table>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
            {
              this.props.courses.map(course =>
                <CourseCardComponent
                    deleteCourse={this.props.deleteCourse}
                    selectCourse={this.props.selectCourse}
                    key={course._id}
                    course={course}
                    selected={this.props.selected === course._id}/>
              )}
            </div>
        </div>
    )
  }
}
