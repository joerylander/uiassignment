import { CellProps } from "react-table";
import { iconUrlGenerator, resolutionSelector } from "../../utils";

export const COLUMNS: ColumnType[] = [
  {
    Header: "Devices",
    accessor: "icon",
    Cell: ({ cell: { value } }: CellProps<{}>) => {
      const correctResolution = resolutionSelector("xs", value.resolutions);
      const imageSrc = iconUrlGenerator(value.id, correctResolution);
      return <img src={imageSrc} />;
    },
  },
  {
    Header: "Product Line",
    accessor: "line.name",
  },
  {
    Header: "Name",
    accessor: "product.name",
  },
];
