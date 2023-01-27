import Searchbar from "./components/SearchBar";

export const COLUMNS = [
  {
    Header: "Devices",
    accessor: "show.devices",
    Filter: Searchbar,
  },
  {
    Header: "Product Line",
    accessor: "show.productline",
    Filter: Searchbar,
  },
  {
    Header: "Name",
    accessor: "show.name",
    Filter: Searchbar,
  },
];
