import React, { Component } from "react";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Select,
  Tooltip,
  Button,
  TextareaAutosize,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  List,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Paper,
  Divider
} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import { Delete, Edit, Add, CheckCircle } from "@material-ui/icons";
import Profile from "../Components/userProfile";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Helper variables
      user: "softclik",
      loggedIn: false,

      //for task and step
      name: "",
      assignedTo: "",
      dueDate: "",
      note: "",
      empty: true,

      //dialog
      stepDialogOpen: false,
      addTask: false,

      //Offocial variable
      Task: {
        user: "",
        name: "",
        ID: "",
        assignedTo: "",
        dueDate: "",
        note: "",
        created: "",
        completed: false,
        steps: [
          {
            name: "",
            ID: "",
            completed: false,
            assignedTo: "",
            dueDate: "",
            note: "",
            created: ""
          }
        ]
      }
    };
  }

  componentDidMount = () => {};

  //handle input and submit
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //edit and delete functions
  deleteTask = id => {};
  deleteStep = e => {
    console.log(e.target.name);
    //   const Task = {
    //     user: this.state.user,
    //     name: this.state.Task.name,
    //     ID: this.state.Task.ID,
    //     assignedTo: this.state.Task.assignedTo,
    //     dueDate: this.state.Task.dueDate,
    //     note: this.state.Task.note,
    //     created: this.state.Task.created,
    //     completed: this.state.Task.completed,
    //     steps: step
    //   };

    //   this.setState({
    //     Task: Task,
    //     name: "",
    //     assignedTo: "",
    //     dueDate: "",
    //     note: "",
    //   });
  };

  editTask = id => {};

  editStep = e => {};
  //handle dialogs
  handleCancelTask = () => {
    this.setState({ addTask: false });
  };
  handleCancelStep = () => {
    this.setState({ stepDialogOpen: false });
  };
  handleAddTask = ev => {
    ev.preventDefault();
    const Task = {
      user: this.state.user,
      name: this.state.name,
      ID: this.state.user + "task" + Date.now(),
      assignedTo: this.state.assignedTo,
      dueDate: this.state.dueDate,
      note: this.state.note,
      created: new Date(Date.now()),
      completed: false,
      steps: []
    };
    this.setState({
      Task: Task,
      name: "",
      assignedTo: "",
      dueDate: "",
      note: "",
      addTask: false
    });
  };

  handleAddStep = e => {
    e.preventDefault();
    const step = this.state.Task.steps.concat({
      name: this.state.name,
      assignedTo: this.state.assignedTo,
      dueDate: this.state.dueDate,
      ID: this.state.user + "step" + Date.now(),
      note: this.state.note,
      created: new Date(Date.now()),
      completed: false
    });

    const Task = {
      user: this.state.user,
      name: this.state.Task.name,
      ID: this.state.Task.ID,
      assignedTo: this.state.Task.assignedTo,
      dueDate: this.state.Task.dueDate,
      note: this.state.Task.note,
      created: this.state.Task.created,
      completed: this.state.Task.completed,
      steps: step
    };

    this.setState({
      Task: Task,
      name: "",
      assignedTo: "",
      dueDate: "",
      note: "",
      stepDialogOpen: false
    });
  };

  //input fields
  inputs = () => {
    return (
      <Dialog open={this.state.addTask}>
        <DialogTitle>
          <Typography variant="body1" color="primary">
            {this.state.name}
          </Typography>
        </DialogTitle>
        <form noValidate onSubmit={this.handleAddTask}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Task Name"
              type="text"
              helperText={this.state.name ? "" : "Task Name required"}
              error={this.state.name ? false : true}
              fullWidth
              value={this.state.name}
              onChange={this.handleChange}
            />

            <Select
              native
              margin="dense"
              id="assignedTo"
              name="assignedTo"
              label="Assigned To"
              fullWidth
              value={this.state.assignedTo}
              onChange={this.handleChange}
            >
              <option value="Softclik">Softclik</option>
              <option value="Francois">Francois</option>
              <option value="Alain">Alain</option>
              <option value="Maliza">Maliza</option>
              <option value="Nyandwi">Nyandwi</option>
            </Select>

            <TextField
              margin="dense"
              id="dueDate"
              name="dueDate"
              type="date"
              helperText={this.state.dueDate ? "" : "Due Date required"}
              error={this.state.dueDate ? false : true}
              fullWidth
              value={this.state.dueDate}
              onChange={this.handleChange}
            />
            <TextareaAutosize
              margin="dense"
              style={{ width: "80%", borderRadius: 10, padding: 10 }}
              id="note"
              name="note"
              rows={4}
              placeholder="Add the Step Description if any!"
              fullWidth
              value={this.state.note}
              onChange={this.handleChange}
            ></TextareaAutosize>
          </DialogContent>
          <DialogActions>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="inherit"
                  type="button"
                  onClick={this.handleCancelTask}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                {this.state.name.length === 0 ||
                this.state.dueDate.length === 0 ? (
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

  stepsForm = () => {
    return (
      <Dialog open={this.state.stepDialogOpen} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">
          <Typography variant="body1" color="primary">
            {this.state.Task.name} - {this.state.name}
          </Typography>
        </DialogTitle>
        <form noValidate onSubmit={this.handleAddStep}>
          <DialogContent>
            <Grid container justify="center">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Step Name"
                type="text"
                helperText={this.state.name ? "" : "Step Name required"}
                error={this.state.name ? false : true}
                fullWidth
                value={this.state.name}
                onChange={this.handleChange}
              />

              <Select
                native
                margin="dense"
                id="assignedTo"
                name="assignedTo"
                label="Assigned To"
                fullWidth
                value={this.state.assignedTo}
                onChange={this.handleChange}
              >
                <option value="Softclik">Softclik</option>
                <option value="Francois">Francois</option>
                <option value="Alain">Alain</option>
                <option value="Maliza">Maliza</option>
                <option value="Nyandwi">Nyandwi</option>
              </Select>

              <TextField
                margin="dense"
                id="dueDate"
                name="dueDate"
                type="date"
                helperText={this.state.dueDate ? "" : "Due Date required"}
                error={this.state.dueDate ? false : true}
                fullWidth
                value={this.state.dueDate}
                onChange={this.handleChange}
              />
              <TextareaAutosize
                margin="dense"
                style={{ width: "80%", borderRadius: 10, padding: 10 }}
                id="note"
                name="note"
                rows={4}
                placeholder="Add the Step Description if any!"
                fullWidth
                value={this.state.note}
                onChange={this.handleChange}
              ></TextareaAutosize>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container justify="flex-end" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="inherit"
                  type="button"
                  onClick={this.handleCancelStep}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                {this.state.name.length === 0 ||
                this.state.dueDate.length === 0 ? (
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

  taskHead = () => {
    const content = (
      <Box>
        <Typography variant="body2" color="inherit">
          Assigned to: {this.state.Task.assignedTo}
        </Typography>
        <Typography variant="body2" color="inherit">
          Due Date: {this.state.Task.dueDate}
        </Typography>
        <Typography variant="body2" color="inherit">
          {this.state.Task.note}
        </Typography>
      </Box>
    );
    return (
      <ListItem className="taskHead" style={{ marginBottom: -15 }}>
        <ListItemIcon>
          <CheckCircle />
        </ListItemIcon>
        <ListItemText>
          <Tooltip placement="top" title={content} interactive>
            <Typography variant="h5">{this.state.Task.name}</Typography>
          </Tooltip>
        </ListItemText>
        <ListItemIcon>
          <Tooltip placement="bottom" title="Add Step">
            <IconButton onClick={this.handleStepDialog}>
              <Add color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Edit Task">
            <IconButton onClick={this.editTask}>
              <Edit color="primary" />
            </IconButton>
          </Tooltip>

          <Tooltip placement="bottom" title="Delete Task">
            <IconButton onClick={this.deleteTask}>
              <Delete color="secondary" />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      </ListItem>
    );
  };

  handleStepDialog = () => {
    this.setState({ stepDialogOpen: true });
  };

  handleTaskDialogOpen = () => {
    this.setState({ addTask: true });
  };

  render() {
    return this.state.loggedIn === true ? (
      <Grid container spacing={2} justify="center">
        <Grid item md={8} sm={12} xs={12}>
          <Typography variant="h6" color="primary" align="center">
            Task Manager
          </Typography>
          {this.state.Task.ID.length === 0 ? (
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleTaskDialogOpen}
              >
                Create New Task
              </Button>
            </Grid>
          ) : (
            ""
          )}
          {this.state.addTask && <this.inputs />}
          <this.stepsForm />

          {this.state.Task.ID.length > 0 ? (
            <List>
              <this.taskHead />
              <ListItem style={{ minWidth: "100%" }}>
                <List style={{ minWidth: "100%" }}>
                  {this.state.Task.steps.map(st => {
                    return (
                      <ListItem
                        key={st.ID}
                        className="taskStep"
                        style={{
                          minWidth: "100%",
                          marginLeft: 16,
                          marginRight: 0
                        }}
                      >
                        <ListItemIcon>
                          <CheckCircle />
                        </ListItemIcon>
                        <ListItemText>
                          <Tooltip
                            placement="top"
                            title={
                              <Box>
                                <Typography variant="body2" color="inherit">
                                  Assigned to:{st.assignedTo}
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                  Due Date: {st.dueDate}
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                  {st.note}
                                </Typography>
                              </Box>
                            }
                            interactive
                          >
                            <Typography variant="h6">{st.name}</Typography>
                          </Tooltip>
                        </ListItemText>
                        <ListItemIcon>
                          <Tooltip placement="bottom" title="Edit Step">
                            <IconButton onClick={this.editStep}>
                              <Edit color="primary" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip placement="bottom" title="Delete Step">
                            <IconButton name={st.ID} onClick={this.deleteStep}>
                              <Delete color="secondary" />
                            </IconButton>
                          </Tooltip>
                        </ListItemIcon>
                      </ListItem>
                    );
                  })}
                </List>
              </ListItem>
            </List>
          ) : (
            ""
          )}
          {this.state.Task.ID.length > 0 ? (
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleTaskDialogOpen}
              >
                Push To The Server
              </Button>
            </Grid>
          ) : (
            ""
          )}
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <Divider />
          <Typography variant="h6" color="primary" align="center">
            Account Info
          </Typography>
          <Paper style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Profile user="Softclik" />
          </Paper>
        </Grid>
      </Grid>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Account;
