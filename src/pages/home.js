import React, { Component } from "react";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Done, Remove } from "@material-ui/icons";
import Tasks from "../Components/tasksList";

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      loggedIn:true
    }
  }
  render() {
    return this.state.loggedIn === true ? (
      <Grid container spacing={4}>
        <Grid item sm={12} md={4} xs={12}>
          <Card>
            <Typography align="center" variant="h6" color="primary">
              Unread Tasks
            </Typography>
            <List>
              <ListItem className="listItem">
                <ListItemText>
                  <Typography variant="h6" color="inherit">
                    Task Name
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    From: softclik 2days ago
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    Due: Frid,25 Nov,2019
                  </Typography>
                  <Typography variant="body1" color="inherit">
                    Some extra notes about task
                  </Typography>
                </ListItemText>

                <ListItemIcon>
                  <Tooltip placement="bottom" title="Accept the Task">
                    <IconButton>
                      <Done color="primary" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip placement="bottom" title="Reject the Task">
                    <IconButton>
                      <Remove color="secondary" />
                    </IconButton>
                  </Tooltip>
                </ListItemIcon>
              </ListItem>

              <Divider />
            </List>
          </Card>
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Card>
            <Typography align="center" variant="h6" color="primary">
              Your Tasks
            </Typography>
            <Tasks yours={true} />
          </Card>
        </Grid>
        <Grid item sm={12} md={4} xs={12}>
          <Card>
            <Typography align="center" variant="h6" color="primary">
              Asigned Tasks
            </Typography>
            <Tasks />
          </Card>
        </Grid>
      </Grid>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
