import { CellProps } from "react-table";
import { iconUrlGenerator, resolutionSelector } from "../../utils/imgUitls";

export const ColumnData = (data: DeviceType[]): ColumnType[] => {
  const COLUMNS = [
    {
      Header: `${data?.length} devices`,
      accessor: "icon",
      Cell: ({ cell: { value } }: CellProps<{}>) => {
        const correctResolution = resolutionSelector("xs", value.resolutions);
        const imageSrc = iconUrlGenerator(value.id, correctResolution);
        return <img src={imageSrc} alt={value?.product?.abbrev ?? ""} />;
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

  return COLUMNS;
};
