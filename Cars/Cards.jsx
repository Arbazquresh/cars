import { CardContent, Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

export const Cards = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ marginLeft: "110px", marginTop: "-240px" }}
    >
      <Grid item xs={4}>
        <Card
          style={{
            borderRadius: 30,
            width: "300px",
            backgroundColor: "lightblue",
          }}
        >
          <CardContent>
            <img src="driver.png" alt="" height={40} width={40} />
            <p>
              {" "}
              <b> Lower Comission</b>
            </p>
            <p style={{ marginTop: "-16px" }}>
              Lorem ipsum dolor <br /> sit amet Lower Comission <br /> Lower
              Comission
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            borderRadius: 30,
            width: "300px",
            backgroundColor: "lightblue",
          }}
        >
          <CardContent>
            <img src="time.png" alt="" height={40} width={40} />
            <p>
              <b>
                {" "}
                Flexbile working <br />
                Hours
              </b>
            </p>
            <p style={{ marginTop: "-16px" }}>
              Lorem ipsum dolor <br /> sit amet Lower Comission
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            borderRadius: 30,
            width: "300px",
            backgroundColor: "lightblue",
          }}
        >
          <CardContent>
            <img src="customer.png" alt="" height={40} width={40} />
            <p>
              <b> Reliable Support</b>
            </p>
            <p style={{ marginTop: "-16px" }}>
              Lorem ipsum dolor <br /> sit amet Lower Comission <br /> Lower
              Comission
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
