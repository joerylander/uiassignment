import React, { useMemo, useState } from "react";
import { COLUMNS } from "../components/TableView/columns";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import GridView from "../components/GridView";
import { filterProducts, filterUniqueProductList } from "../utils";
import "./home.css";

type HomeProps = {
  data: DataType;
};

export type ViewType = "list" | "grid";

const Home: React.FC<HomeProps> = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  const [viewState, setViewState] = useState<ViewType>("list");
  const [filterInput, setFilterInput] = useState("");
  const [labelValue, setLabelValue] = useState<string[]>([]);

  const searchedProducts = filterProducts(
    data.devices,
    filterInput,
    labelValue
  );
  const renderView = () => {
    if (searchedProducts.length === 0) {
      return <p>The product you searched for does not exist!</p>;
    }

    switch (viewState) {
      case "list":
        return <TableView data={searchedProducts} columns={columns} />;
      case "grid":
        return <GridView data={searchedProducts} />;
      default:
        return <></>;
    }
  };

  const uniqueProductList = filterUniqueProductList(data.devices);

  return (
    <>
      <Header />
      <Navbar
        columns={columns}
        setViewState={setViewState}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        uniqueProductList={uniqueProductList}
        labelValue={labelValue}
        setLabelValue={setLabelValue}
      />

      <main className="main">{renderView()}</main>
    </>
  );
};

export default Home;
