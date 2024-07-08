import React from "react";
import { CardContent, Grid, Button, Card, TextField } from "@mui/material";
import { Text } from "./Text";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

export const Head = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img src="car.png" alt="" height="500px" width="100%" />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <img
            src="GetGoo.png"
            alt=""
            style={{
              position: "relative",
              top: "-470px",
              height: "75px",
              width: "75px",
              left: "-30px",
              //   zIndex: 2,
            }}
          />
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Card
              style={{ position: "relative", top: "-450px", left: "-13px" }}
            >
              <CardContent>
                <h3>Welcome To GetGO</h3>
                <p>
                  Lowest Comission <div>Based Platform</div>{" "}
                </p>

                <Text />
                <br />
                <Button variant="contained" fullWidth>
                  Continue
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "-336px", marginLeft: "50px" }}>
        <h2>High Earnings</h2>
        <div style={{ marginTop: "-6px", fontWeight: 600, fontStretch: 10 }}>
          Lowest Commission Platform
        </div>
      </Grid>
      <Cards />
      <Footer />
    </Grid>
  );
};
