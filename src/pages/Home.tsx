import React from "react";

type HomeProps = {
  data: any;
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const { devices } = data;
  return (
    <>
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
