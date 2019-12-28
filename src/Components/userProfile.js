import React, { Component } from "react";
import {
  Grid,
  IconButton,
  Tooltip,
  ListItemText,
  ListItem,
  Button,
  List,
  Typography,
  ListItemIcon,
  Divider,
  Box,
  TextField,
  Select,
  DialogTitle,
  DialogActions,
  Dialog,
  DialogContent,
  Badge
} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {auth} from "firebase";
import { AccountBox, Delete, Edit, Add } from "@material-ui/icons";
import Tasks from "./tasksList";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      dialogOpen: false,
      name: "",
      email: "",
      category: "",
      loggedIn:false
    };
  }

  //helper functions
  handleMemberDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancelMember = () => {
    this.setState({ dialogOpen: false });
  };

  handleAddMember = e => {
    e.preventDefault();
    this.setState({ dialogOpen: false });
  };
  //add member dialog
  addMemberDialog = () => {
    return (
      <Dialog open={this.state.dialogOpen}>
        <DialogTitle>Add Member</DialogTitle>
        <form noValidate onSubmit={this.handleAddMember}>
          <DialogContent>
            <Grid container justify="center">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Member Name"
                type="text"
                helperText={this.state.name ? "" : "Member Name required"}
                error={this.state.name ? false : true}
                fullWidth
                value={this.state.name}
                onChange={this.handleChange}
              />

              <TextField
                margin="dense"
                id="email"
                name="email"
                type="email"
                helperText={this.state.email ? "" : "Member Email required"}
                error={this.state.email ? false : true}
                fullWidth
                value={this.state.email}
                onChange={this.handleChange}
              />

              <Select
                native
                margin="dense"
                id="category"
                name="category"
                label="Member Category"
                helperText={
                  this.state.category ? "" : "Member Category required"
                }
                error={this.state.category ? false : true}
                fullWidth
                onChange={this.handleChange}
              >
                <option value="">Select Category</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Other">Other</option>
              </Select>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="inherit"
                  type="button"
                  onClick={this.handleCancelMember}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                {this.state.category.length === 0 ||
                this.state.email.length === 0 ? (
                  <Button
                    disabled
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Add
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" type="submit">
                    Add
                  </Button>
                )}
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    );
  };

  render() {
    return (
      <Box>
        <Typography variant="h6" color="primary" align="center">
          {this.props.user}
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          {this.props.user + "email"}
        </Typography>
        <Grid container justify="center">
          <Button
            onClick={()=>{
            auth().signOut();
            localStorage.removeItem("userEmail");
          }}
            variant="outlined"
            color="inherit"
            style={{
              textTransform: "capitalize",
              marginTop: 10,
              marginBottom: 40
            }}
          >
            Signout
          </Button>
        </Grid>
        <Divider />
        <List style={{ marginBottom: 10, background: "rgba(0,0,250,0.08)" }}>
          <ListItem>
            <ListItemText>
              <Typography variant="h5" color="primary">
                Members
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <AccountBox />
              </Badge>
            </ListItemIcon>
            <ListItemIcon>
              <IconButton color="primary" onClick={this.handleMemberDialogOpen}>
                <Tooltip title="Add Member">
                  <Add />
                </Tooltip>
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>

        <this.addMemberDialog />
        <List>
          <ListItem className="memberItem">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5" color="inherit">
                UserName
              </Typography>
              <Typography variant="body2" color="primary">
                User email
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <Tooltip placement="bottom" title="Edit Member">
                <IconButton onClick={this.editMember}>
                  <Edit color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip placement="bottom" title="Remove Member">
                <IconButton onClick={this.deleteMember}>
                  <Delete color="secondary" />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <Typography variant="h5" color="primary" align="center">
          Tasks
        </Typography>
        <Tasks />
      </Box>
    );
  }
}

export default Profile;
