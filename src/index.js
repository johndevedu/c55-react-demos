import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import AjaxSetStateOnClick from "./AjaxSetStateOnClick";
import AjaxSetStateOnLoad from "./AjaxSetStateOnLoad";
import ListItems from "./ListItems";
import ListItemsWithEvent from "./ListItemsWithEvent";
import LiftingStateUpParent from "./LiftingStateUpParent";
import LiftingStateUpAnotherParent from "./LiftingStateUpAnotherParent";
import RedirectDemo from "./RedirectDemo";
import SetStateAsyncDemo from "./SetStateAsyncDemo";
import ComponentPassingPropsDownParent from "./ComponentPassingPropsDownParent";
import ModalDemo from "./ModalDemo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <Router>
    <div style={styles}>
      <div style={{ display: "block" }}>
        <Link to="/">Hello</Link>
        <br />
        <Link to="/list-items">List Items</Link>
        <br />
        <Link to="/list-items-with-event">List Items wEvent</Link>
        <br />
        <Link to="/ajax-set-state-on-load">On Load</Link>
        <br />
        <Link to="/ajax-set-state-on-click"> On Click</Link>
        <br />
        <Link to="/redirect-demo"> Redirect Demo</Link>
        <br />
        <Link to="/component-lifting-state-up"> Lifting State Up</Link>
        <br />
        <Link to="/component-lifting-state-up-another">
          {" "}
          Lifting State Up Example 2
        </Link>
        <br />
        <Link to="/setstate-async">setState is async demo</Link>
        <br />
        <Link to="/modal-demo">modal demo</Link>
        <br />
        <Link to="/component-passing-props-down">Passing props down</Link>
        <br />
      </div>
      <hr />
      <Route exact path="/" component={Hello} />
      <Route exact path="/list-items" component={ListItems} />
      <Route path="/list-items-with-event" component={ListItemsWithEvent} />
      <Route path="/ajax-set-state-on-load" component={AjaxSetStateOnLoad} />
      <Route path="/ajax-set-state-on-click" component={AjaxSetStateOnClick} />
      <Route path="/setstate-async" component={SetStateAsyncDemo} />
      <Route path="/modal-demo" component={ModalDemo} />
      <Route
        path="/component-lifting-state-up"
        component={LiftingStateUpParent}
      />
      <Route
        path="/component-lifting-state-up-another"
        component={LiftingStateUpAnotherParent}
      />
      <Route path="/redirect-demo" component={RedirectDemo} />
      <Route
        path="/component-passing-props-down"
        component={ComponentPassingPropsDownParent}
      />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
