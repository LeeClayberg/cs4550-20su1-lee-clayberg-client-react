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
              <th className=""/>
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
              <i className="fa fa-pencil fa-lg wbdv-row wbdv-icon card-pencil float-right"/>
              <i className="fa fa-trash fa-lg wbdv-row wbdv-icon card-trash float-right"/>
              <img className="card-img-top" src={require('../preview-image.png')} alt="Card image cap"/>
              <div className="row card-body no-padding">
                <div className="col-10 card-text">
                  <p className="text-truncate card-title">Name of file
                    ahsdklbjfdsjfalsdkfjhalksdfljsf</p>
                  <div className="align-middle">
                    <i className="fa fa-file-text wbdv-row wbdv-icon align-middle card-doc-icon"></i>
                    <span className="card-time align-bottom">
                          Modified 8:09 AM
                        </span>
                  </div>
                </div>
                <div className="col-2 no-padding check">
                  <i className="fa fa-check wbdv-row wbdv-icon align-middle"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
