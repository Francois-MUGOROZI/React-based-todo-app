import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const Link = require("react-router-dom").Link;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      errMsg: "",
      error: false,
      loggedIn: false
    };
  }

  uiConfig = {
    signInFlow: "",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => null
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        localStorage.setItem("userEmail",user.email);
      }
      this.setState({ loggedIn: !!user });
    });
  };

  render() {
    return (
      <div>
        {this.state.loggedIn === true ? (
          <Redirect to="/" />
        ) : (
          <Dialog
            fullWidth
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>

            <DialogContent>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </DialogContent>

            <DialogActions>
              <Button
                component={Link}
                to="/"
                onClick={this.handleClose}
                color="primary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

export default Login;
