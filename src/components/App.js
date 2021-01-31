import React, { useEffect, useState } from "react";
import { client } from "./client";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import { Container } from "react-bootstrap";
import FrontPage from "./FrontPage";


function App() {
  const [state, setstate] = useState()
  useEffect(() => {
    client.getEntries({
      'content_type': 'blogpost'
    })
      .then((response) => {
        setstate(response)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Container style={{ margin: "100px auto" }}>
          <Switch>
            <Route exact path="/">
              <FrontPage />
              <Posts data={state} />
            </Route>
            <Route path="/Post/:id">
              <SinglePost />
            </Route>

          </Switch>
        </ Container>
      </Router>
    </div>
  );
}

export default App;
