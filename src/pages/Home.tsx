import React, { useMemo, useState } from "react";
import { COLUMNS } from "../components/TableView/columns";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import GridView from "../components/GridView";

type HomeProps = {
  data: DataType;
  loaded: boolean;
};

export type ViewType = "list" | "grid";

const Home: React.FC<HomeProps> = ({ data, loaded }) => {
  const columns = useMemo(() => COLUMNS, []);
  const [viewState, setViewState] = useState<ViewType>("list");
  const [filterInput, setFilterInput] = useState("");

  const renderView = () => {
    switch (viewState) {
      case "list":
        return <TableView data={data.devices} columns={columns} />;
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
      {renderView()}
    </>
  );
};

export default Home;
