import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditorContainer from "../containers/CourseEditorContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path="/login" exact={true} component={LoginComponent}/>

          {/*TODO: port over registraion, profile components*/}

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor/:course'
            exact={true}
            component={CourseEditorContainer}/>

          <Route
              path='/editor'
              exact={true}
              component={CourseEditorContainer}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
