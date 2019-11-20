import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../images/avatar.png";
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Ram Mahajan</h2>
            <img src={avatar} alt="" style={{ height: "250px" }} />
          </Cell>
          <Cell col={6}>Half Page</Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
