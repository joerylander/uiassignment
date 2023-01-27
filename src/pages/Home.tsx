import React, { useMemo, useState } from "react";
import { COLUMNS } from "../components/TableView/columns";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import GridView from "../components/GridView";
import { filterProducts } from "../utils";
import "./home.css";

type HomeProps = {
  data: DataType;
  loaded: boolean;
};

export type ViewType = "list" | "grid";

const Home: React.FC<HomeProps> = ({ data, loaded }) => {
  const columns = useMemo(() => COLUMNS, []);
  const [viewState, setViewState] = useState<ViewType>("list");
  const [filterInput, setFilterInput] = useState("");

  const searchedProducts = filterProducts(data.devices, filterInput);

  const renderView = () => {
    if (searchedProducts.length === 0) {
      return <p>The product you searched for does not exist!</p>;
    }
    switch (viewState) {
      case "list":
        return <TableView data={searchedProducts} columns={columns} />;
      case "grid":
        return <GridView />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Header />
      <Navbar
        columns={columns}
        setViewState={setViewState}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <main className="main">{renderView()}</main>
    </>
  );
};

export default Home;
