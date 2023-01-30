import React from "react";
import { iconUrlGenerator, resolutionSelector } from "../../utils/imgUitls";
import "./singleproductcard.css";

type SingleProductType = {
  device: DeviceType | undefined;
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
          src={ProductImg(device!.icon)}
          alt={device?.product.abbrev}
          className="product__img"
        />
      </div>
      <div className="product__details-wrapper">
        <div className="product__details">
          <p className="product__detail">Product Line</p>
          <p className="product__detail">{device?.line?.name || "N/A"}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">ID</p>
          <p className="product__detail">{device?.line?.id || "N/A"}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">Name</p>
          <p className="product__detail">{device?.product?.name || "N/A"}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">Short name</p>

          <p className="product__detail">{device?.product?.abbrev || "N/A"}</p>
        </div>

        <div className="product__details">
          <p className="product__detail">Max power</p>
          <p className="product__detail">
            {device?.unifi?.network?.radios?.na?.maxPower
              ? device?.unifi?.network?.radios?.na?.maxPower + "watt"
              : "N/A"}
          </p>
        </div>

        <div className="product__details">
          <p className="product__detail">Speed</p>
          <p className="product__detail">
            {device?.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond
              ? device?.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond +
                "Mpbs"
              : "N/A"}
          </p>
        </div>

        <div className="product__details">
          <p className="product__detail">Number of ports</p>
          <p className="product__detail">
            {device?.unifi?.network?.numberOfPorts ?? "N/A"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleProductCard;
