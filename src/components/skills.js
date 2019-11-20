import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <div style={{ display: "inline-block", marginRight: "1em" }}>
        <Button raised colored>
          {this.props.skill}
        </Button>
      </div>
    );
  }
}

export default Skills;
