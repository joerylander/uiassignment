import { count } from "console";
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

type HomeProps = {
  data: DataType;
  loaded: boolean;
};

const countries = [
  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },
];

const Home: React.FC<HomeProps> = ({ data, loaded }) => {
  const { devices } = data;
  return (
    <>
      <Header />
      <Navbar />
      {/* {loaded && <Table data={countries} />} */}
      <Table data={countries} />
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
