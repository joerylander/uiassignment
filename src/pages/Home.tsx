import React, { useMemo } from "react";
import { COLUMNS } from "../components/TableView/columns";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TableView from "../components/TableView";

type HomeProps = {
  data: DataType;
  loaded: boolean;
};

const Home: React.FC<HomeProps> = ({ data, loaded }) => {
  const columns = useMemo(() => COLUMNS, []);
  // console.log(data);

  return (
    <>
      <Header />
      <Navbar columns={columns} />
      {/* {loaded && <TableView data={countries} />} */}
      <TableView data={data.devices} columns={columns} />
    </>
  );
};

export default Home;
