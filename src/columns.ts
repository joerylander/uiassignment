import Searchbar from "./components/SearchBar";

export const COLUMNS = [
  {
    Header: "Devices",
    accessor: "devices.id",
    Cell: ({ cell: { value } }: any) => (value ? { value } : "-"),
    Filter: Searchbar,
  },
  {
    Header: "Product Line",
    accessor: "data.line.name",
    Cell: ({ cell: { value } }: any) => (value ? { value } : "-"),
    Filter: Searchbar,
  },
  {
    Header: "Name",
    accessor: "device.product.name",
    Cell: ({ cell: { value } }: any) => (value ? { value } : "-"),
    Filter: Searchbar,
  },
];
