import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import * as firebase from "firebase";
const Link = require("react-router-dom").Link;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      email: "",
      password: "",
      username:"",
      userimage:"",
      error: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    //firebase Signup
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(snap => {})
      .catch(function(error) {
        // Handle Errors here.
        
        // ...
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Signup To Shared-Task To View Tasks
            </DialogContentText>

            <form noValidate onSubmit={this.handleSubmit}>
              <Grid container justify="center" spacing={2} alignItems="center">
                <Grid item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    helperText={this.state.username ? "" : "Username required"}
                    error={this.state.username ? false : true}
                    fullWidth
                    required
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    helperText={this.state.email ? "" : "Email required"}
                    error={this.state.email ? false : true}
                    fullWidth
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <TextField
                    margin="dense"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    helperText={this.state.password ? "" : "Password required"}
                    error={this.state.password ? false : true}
                    fullWidth
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <input type="file" name="userimage" id="userimage" hidden/>
                  <Tooltip placement="top">
                      <IconButton>
                         Image
                      </IconButton>
                  </Tooltip>
                </Grid>
                <Grid>
                  <Button type="submit" color="primary" variant="contained">
                    Signup
                  </Button>
                </Grid>
              </Grid>
            </form>
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
      </div>
    );
  }
}

export default Signup;
