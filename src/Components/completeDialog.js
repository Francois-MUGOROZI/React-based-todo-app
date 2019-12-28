import React, { Component } from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Grid,Button,TextField} from "@material-ui/core";
const Link = require("react-router-dom").Link;

class completeDialog extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div>
            <Dialog 
              open={false}
            //   onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Login</DialogTitle>
    
              <DialogContent>
                <DialogContentText>
                  Login To Shared-Task To View Tasks
                </DialogContentText>
    
                <form noValidate onSubmit={this.handleSubmit}>
                  <Grid container justify="center" spacing={2} alignItems="center">
                    <Grid item sm={12}>
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
                    </Grid>
    
                    <Grid item>
                      <Button type="submit" color="primary" variant="contained">
                        Login
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

export default completeDialog
