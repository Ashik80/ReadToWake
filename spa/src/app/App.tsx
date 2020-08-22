import React, { useEffect, useContext } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Feed from "./feed/Feed";
import { Route, Switch } from "react-router-dom";
import MyBooks from "./mybooks/MyBooks";
import BookInfo from "./books/BookInfo";
import HomePage from "./home/HomePage";
import { AuthStoreContext } from "../stores/authStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const { token, getToken } = useContext(AuthStoreContext)

  useEffect(() => {
    if(!token) getToken()
  }, [token, getToken])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/feed" component={Feed} />
        <Route path="/my-books" component={MyBooks} />
        <Route path="/book/:id" component={BookInfo} />
      </Switch>
    </div>
  );
};

export default observer(App);
