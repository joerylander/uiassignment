import { CellProps } from "react-table";
import { iconUrlGenerator, resolutionSelector } from "../../utils";
import Searchbar from "../SearchBar";

export const COLUMNS = [
  {
    Header: "Devices",
    accessor: "icon",
    Cell: ({ cell: { value } }: CellProps<{}>) => {
      const correctResolution = resolutionSelector("xs", value.resolutions);
      const imageSrc = iconUrlGenerator(value.id, correctResolution);
      return <img src={imageSrc} />;
    },
    Filter: Searchbar,
  },
  {
    Header: "Product Line",
    accessor: "line.name",
    Filter: Searchbar,
  },
  {
    Header: "Name",
    accessor: "product.name",
    Filter: Searchbar,
  },
];
