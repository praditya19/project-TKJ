import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://binusasmg.sch.id/wp-content/uploads/2017/12/IMG_1937.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <br />
            <div className="banner-text">
              <h1>Inventaris Lab Komputer</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
