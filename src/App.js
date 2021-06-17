import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";

const Home = () => {
  return <h2>Home Page</h2>;
};

const About = () => {
  return <h2>About Page</h2>;
};

const Contact = () => {
  return <h2>Contact Page </h2>;
};

const NotFound = () => {
  return <h2>Page Not Found!</h2>;
};

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Profile Page</h2>
      <Link to="/profile/10">Edit Profile</Link>
    </div>
  );
};

const EditProfile = (props) => {
  console.log(props);
  return <h2>Editing profile page of user with id {props.match.params.id}</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/profile/:id" component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
