import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import PostList from "./PostList";
import PostForm from "./PostForm";

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

      <Route path="/posts/:id">
        {/* TODO: Post Details Component */}
      </Route>
    </Switch>
  );
};

export default ApplicationViews;

