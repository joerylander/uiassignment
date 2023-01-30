import React from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import SingleProductCard from "../../components/SingleProductCard";
import ProductNav from "../../components/ProductNav";

type SingleProductType = {
  data: DeviceType[];
};

const SingleProduct: React.FC<SingleProductType> = ({ data }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const device = data.find((device) => device.id === productId);

  return (
    <>
      <ProductNav navigate={navigate} deviceTitle={device?.product.name} />
      <main className="product__container">
        {device && <SingleProductCard device={device} />}
      </main>
    </>
  );
};

export default SingleProduct;
