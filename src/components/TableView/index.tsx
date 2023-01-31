import React from "react";
import { useTable, Column, Row } from "react-table";
import { useNavigate } from "react-router-dom";
import "./table.css";

type TableViewType = {
  data: DeviceType[];
  columns: Column<DeviceType>[] | ColumnType[] | any;
  // Try fix columns type to what useTable columns type is. Avoid any if possible
  // readonly Column<DeviceType>[]
};

const TableView: React.FC<TableViewType> = ({ data, columns }) => {
  const navigate = useNavigate();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleClick = (row: Row<DeviceType>) => {
    navigate(`/product/${row.original.id}`);
  };

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleClick(row)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableView;
