import React from "react";
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
              <th className="d-none d-md-table-cell small-cell header-height align-middle dark-gray wbdv-header wbdv-owner">
                Owned by me
                <i className="fa fa-caret-down drop-down-arrow"></i>
              </th>
              <th className="d-none d-md-table-cell small-cell header-height align-middle last-modified-size
              dark-gray wbdv-header wbdv-last-modified"/>
              <th className="small-cell header-height align-middle dark-gray"
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
          <div className="card-columns">
            <div className="card">
              <img className="card-img-top" src={require('../preview-image.png')} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text text-truncate card-title">Name of file ahsdklbjfdsjfalsdkfjhalksdfljsf</p>
                  <div className="">
                    <div className="col-1 no-padding">
                      <i className="fa fa-file-text wbdv-row wbdv-icon align-middle sharp-blue"></i>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}
