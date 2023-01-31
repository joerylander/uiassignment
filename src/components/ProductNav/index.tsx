import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { NavigateFunction } from "react-router-dom";

type ProductNavType = {
  navigate: NavigateFunction;
  deviceTitle: string | undefined;
};

const ProductNav: React.FC<ProductNavType> = ({ navigate, deviceTitle }) => {
  return (
    <section className="product__nav">
      <button className="product__home-btn" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon />
      </button>
      <h3 className="product__title">{deviceTitle ?? ""}</h3>
    </section>
  );
};

export default ProductNav;
