import React from "react";
import "./singleproduct.css";
import { useNavigate, useParams } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard";

type SingleProductType = {
  data: DeviceType[];
};

const SingleProduct: React.FC<SingleProductType> = ({ data }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const device = data.find((device) => device.id === productId);

  return (
    <>
      <section className="product__nav">
        <button className="product__home-btn" onClick={() => navigate(-1)}>
          Button
        </button>
        <h3 className="product__title">{device?.product.name}</h3>
      </section>
      <main className="product__container">
        <SingleProductCard device={device} />
      </main>
    </>
  );
};

export default SingleProduct;
