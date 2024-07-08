import React from "react";
import { Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <div style={{ marginLeft: "-75px" }}>
          <h5>Download Driver App</h5>
          <p style={{ marginTop: "-10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ea
            nihil! Placeat mollitia molestias reiciendis debitis optio
            distinctio unde id laudantium consectetur pariatur !
          </p>
        </div>
        <div style={{ marginLeft: "-76px" }}>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
        </div>
        <div style={{ marginLeft: "-50px" }}>
          <img src="code.png" alt="" height={150} width={150} />
        </div>
      </Grid>
      <Grid item xs={5}>
        <img
          src="location.png"
          alt=""
          height={400}
          style={{ position: "relative", left: "130px" }}
        />
      </Grid>
      {/* <Grid item xs={1}></Grid> */}
    </Grid>
  );
};
