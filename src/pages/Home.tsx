import React from "react";
import Header from "../components/Header";

type HomeProps = {
  data: DataType;
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const { devices } = data;
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>{data?.version}</p>
      <ul>
        {/* {devices?.map((device: any, i: number) => {
          return <li key={i}>{device}</li>;
        })} */}
      </ul>
    </>
  );
};

export default Home;
