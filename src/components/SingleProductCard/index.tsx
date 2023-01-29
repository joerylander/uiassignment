import React from "react";

type SingleProductType = {
  device: DeviceType | undefined;
};

const SingleProductCard: React.FC<SingleProductType> = ({ device }) => {
  console.log(device);

  return (
    <>
      <div className="product__img-wrapper">
        <img src="" alt="" className="product__img" />
      </div>
      <div className="product__detail-wrapper">
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
          <p className="product__detail">{device?.product.abbrev}</p>
        </div>
        <div className="product__details">
          <p className="product__detail">Max power</p>
          <p className="product__detail"></p>
        </div>
        <div className="product__details">
          <p className="product__detail">Speed</p>
          <p className="product__detail"></p>
        </div>
        <div className="product__details">
          <p className="product__detail">Number of ports</p>
          <p className="product__detail"></p>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
