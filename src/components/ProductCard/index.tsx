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
    <div>
      <img src={GridImg(device.icon)} />
      <h3 className="">{device.product.name}</h3>
      <h4 className="">{device.line.name}</h4>
    </div>
  );
};

export default ProductCard;
