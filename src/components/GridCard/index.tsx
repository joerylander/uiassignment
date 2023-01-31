import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { iconUrlGenerator, resolutionSelector } from "../../utils/imgUitls";
import "./gridcard.css";

type ProductCardType = {
  device: DeviceType;
};

const ProductCard: React.FC<ProductCardType> = ({ device }) => {
  const GridImg = (icon: IconType) => {
    const correctResolution = resolutionSelector("lg", icon.resolutions);
    const imageSrc = iconUrlGenerator(icon.id, correctResolution);
    return imageSrc;
  };

  return (
    <Link to={`product/${device.id}`} style={{ textDecoration: "none" }}>
      <Card className="card">
        <div className="card-img__wrapper">
          <img src={GridImg(device.icon)} alt={device.product.abbrev ?? ""} />
        </div>
        <div className="card__name-wrapper">
          <h3 className="card__product-name">{device.product.name}</h3>
          <h4 className="card__line-name">{device.line.name}</h4>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
