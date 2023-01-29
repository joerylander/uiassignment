import { Card } from "@mui/material";
import React from "react";
import { iconUrlGenerator, resolutionSelector } from "../../utils";

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
    <Card>
      <img src={GridImg(device.icon)} alt={device.product.abbrev || ""} />
      <h3 className="">{device.product.name}</h3>
      <h4 className="">{device.line.name}</h4>
    </Card>
  );
};

export default ProductCard;
