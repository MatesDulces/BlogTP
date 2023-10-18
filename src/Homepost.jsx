import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

function Homepost() {
  const [postContent, setPostContent] = useState('');

  const updatePostContent = (content) => {
    setPostContent(content);
  };

  return (
    <Router>
      <Switch>
        <Route path="/post">
          <Post updateContent={updatePostContent} />
        </Route>
        <Route path="/">
          <Home content={postContent} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Homepost;
