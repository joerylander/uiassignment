import React from "react";
import { iconUrlGenerator, resolutionSelector } from "../../utils/imgUitls";
import "./singleproductcard.css";

type SingleProductType = {
  device: DeviceType;
};

const SingleProductCard: React.FC<SingleProductType> = ({ device }) => {
  console.log(device);
  const ProductImg = (icon: IconType) => {
    const correctResolution = resolutionSelector("xl", icon.resolutions);
    const imageSrc = iconUrlGenerator(icon.id, correctResolution);
    return imageSrc;
  };

  return (
    <article className="product">
      <div className="product__img-wrapper">
        <img
          src={ProductImg(device.icon)}
          alt={device?.product.abbrev}
          className="product__img"
        />
      </div>
      <div className="product__details-wrapper">
        <div className="product__details">
          <p className="product__detail">Product Line</p>
          <p className="product__detail">{device?.line.name}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">ID</p>
          <p className="product__detail">{device?.line.id}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">Name</p>
          <p className="product__detail">{device?.product.name}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">Short name</p>
          {device?.shortnames.map((shortName, i) => (
            <p key={i} className="product__detail">
              {shortName}
            </p>
          ))}
        </div>

        <div className="product__details">
          <p className="product__detail">Max power</p>
          <p>Need to fix prop deets</p>
          <p className="product__detail">
            {device?.unifi?.network.hybrid} watt
          </p>
        </div>

        <div className="product__details">
          <p className="product__detail">Speed</p>
          <p>
            Need to fix prop deets, not sure if this speed to display or whatnot
          </p>
          <p className="product__detail">
            {device?.unifi?.network.ethernetMaxSpeedMegabitsPerSecond} Mbps
          </p>
        </div>

        <div className="product__details">
          <p className="product__detail">Number of ports</p>
          <p className="product__detail">
            {device?.unifi?.network.numberOfPorts || 0}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleProductCard;
