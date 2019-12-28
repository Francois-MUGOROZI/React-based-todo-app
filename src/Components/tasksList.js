import React, { Component } from "react";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  Tooltip
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";


class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completeOpen: false
    };
  }

  handleCheckBox = () => {
    this.setState({ completeOpen: true });
  };

  listItem = () => {
    return (
      <ListItem className="memberItem">
        <ListItemIcon>
          <Tooltip title="Complete Task">
            <Checkbox color="primary" onChange={this.handleCheckBox} />
          </Tooltip>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h6">Task name here</Typography>
          {!this.props.yours && (
            <Typography variant="body2" color="inherit">
              From: softclik 2days ago
            </Typography>
          )}
          <Typography variant="body2" color="inherit">
            Due: Frid,25 Nov,2019
          </Typography>
          <Typography variant="body1" color="inherit">
            Some extra notes about task
          </Typography>
        </ListItemText>

        <ListItemIcon>
          <Tooltip title="Edit Task">
            <Edit color="primary" />
          </Tooltip>
        </ListItemIcon>

        <ListItemIcon>
          <Tooltip title="Delete Task">
            <Delete color="secondary" />
          </Tooltip>
        </ListItemIcon>
      </ListItem>
    );
  };

  render() {
    return (
      <div>
        <List>
          <this.listItem />
          <Divider />
        </List>
      </div>
    );
  }
}

export default Tasks;
