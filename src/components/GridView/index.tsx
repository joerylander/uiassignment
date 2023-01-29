import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";

type GridViewType = {
  data: DeviceType[];
};

const GridView: React.FC<GridViewType> = ({ data }) => {
  return (
    <Grid container spacing={1}>
      {data.map((device) => {
        return (
          <Grid>
            <ProductCard device={device} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridView;
