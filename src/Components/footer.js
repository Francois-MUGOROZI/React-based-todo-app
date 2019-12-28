import React, { Component } from "react";
import {
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Button,
  TextField,
  TextareaAutosize
} from "@material-ui/core";
import {
  Web,
  Phone,
  Mail,
  Copyright,
  Facebook,
  Twitter,
  WhatsApp
} from "@material-ui/icons";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFeedBack = () => {};

  render() {
    return (
      <div className="footer">
        <Grid container justify="center">
          <Grid item md={4} sm={12} xs={12}>
            <Typography variant="body1">Share with Friends:</Typography>
            <Divider />
            <Grid container justify="center">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Facebook style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">Softclik</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Twitter style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1"> @Softclik</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WhatsApp style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      href="https:\\www.softclik.com"
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      Whatsapp
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Typography variant="body1">Contact Us:</Typography>
            <Divider />
            <Grid container justify="center">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Mail style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      info.softclik@gmail.com
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1"> +250781139747</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Web style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      href="https:\\www.softclik.com"
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      www.softclik.com
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Typography variant="body1">Give Feedback:</Typography>
            <Divider />
            <Grid container justify="center">
              <form noValidate onSubmit={this.handleFeedBack}>
                <TextField
                  style={{ background: "#fff", borderRadius: 10, padding: 10 }}
                  margin="dense"
                  id="email"
                  name="email"
                  label="Your Email"
                  type="email"
                  helperText={this.state.email ? "" : "Your email required"}
                  error={this.state.email ? false : true}
                  fullWidth
                  value={this.state.email}
                  onChange={this.handleChange}
                />

                <TextareaAutosize
                  style={{ width: "100%", borderRadius: 10, padding: 10 }}
                  margin="dense"
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Add the Step Description if any!"
                  fullWidth
                  helperText={this.state.message ? "" : "Your message required"}
                  error={this.state.message ? false : true}
                  value={this.state.message}
                  onChange={this.handleChange}
                ></TextareaAutosize>
                <Grid container justify="center">
                  {this.state.email.length === 0 ||
                  this.state.message.length === 0 ? (
                    <Button
                      disabled
                      style={{ marginBottom: 20 }}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Send
                    </Button>
                  ) : (
                    <Button
                      style={{ marginBottom: 20 }}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Send
                    </Button>
                  )}
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container justify="center">
          <Typography variant="body2">
            Copywrite <Copyright /> 2019 All Right Reserved
            <span>
              {" "}
              Powered by:{" "}
              <Link
                href="https:\\www.softclik.com"
                target="_blank"
                style={{ color: "white" }}
              >
                Softclik
              </Link>
            </span>
          </Typography>
        </Grid>
      </div>
    );
  }
}
