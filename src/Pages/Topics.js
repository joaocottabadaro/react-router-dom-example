import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Topic from "./Topic";
import Button from "../Components/Button";
const Topics = (props) => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log(props);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
      <Button
        onClick={() => {
          console.log("teste");
          props.history.goBack();
        }}
      >
        teste
      </Button>
    </div>
  );
};

export default Topics;
