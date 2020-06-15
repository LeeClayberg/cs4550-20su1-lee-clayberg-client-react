import React from 'react'
import CourseManagerContainer from "../containers/CourseManagerContainer";
import CourseEditorContainer from "../containers/CourseEditorContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import RegistrationComponent from "./RegistrationComponent";
import ProfileComponent from "./ProfileComponent";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path="/login" exact={true} component={LoginComponent}/>
          <Route path="/register" exact={true} component={RegistrationComponent}/>
          <Route path="/profile" exact={true} component={ProfileComponent}/>

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseManagerContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseManagerContainer}/>

          <Route
            path={['/editor', '/editor/:courseId', '/editor/:courseId/modules/:moduleId', '/editor/:courseId/modules/:moduleId/lessons/:lessonId', '/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId']}
            exact={true}
            component={CourseEditorContainer}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
