import { Grid } from "@mui/material";
import React from "react";
import GridCard from "../GridCard";

type GridViewType = {
  data: DeviceType[];
};

const GridView: React.FC<GridViewType> = ({ data }) => {
  return (
    <>
      <h2>{data.length} devices</h2>
      <Grid container spacing={3}>
        {data.map((device) => {
          return (
            <Grid key={device.id} item xs={12} md={4} lg={12 / 5}>
              <GridCard device={device} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GridView;
