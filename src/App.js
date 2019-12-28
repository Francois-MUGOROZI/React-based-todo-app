import React, { Component } from "react";
import { auth, admin, app, database } from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//pages and components
import Home from "./pages/home";
import Account from "./pages/account";
import Navbar from "./Components/navBar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Container } from "@material-ui/core";
import Footer from "./Components/footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Tasks: null,
      user: null,
      loggedIn: true
    };
  }

  componentDidMount() {
    var db = database();
    var ref = db.ref("Users");
    ref.on("value", snap => {
      const Users = snap.val();
      const userEmail = localStorage.getItem("userEmail");

      if (userEmail === null || userEmail === "") {
        this.setState({ loggedIn: false });
      }
      const CurrentUser = Users.find(u => {
        return u.email === userEmail;
      });
      if (CurrentUser === undefined) {
        this.setState({loggedIn:false});
      } else {
        console.log("Defined User");
      };
    });
  }

  render() {
    return (
      <Router>
          <div>
            <Navbar />
            <Container style={{ marginTop: 100 }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/account" component={Account} />
              </Switch>
            </Container>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
