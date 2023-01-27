import React, { useState } from "react";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import "./table.css";

type TableViewType = {
  data: any;
  columns: any;
};

const TableView: React.FC<TableViewType> = ({ data, columns }) => {
  // console.log(data);
  // console.log(columns);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data });
  console.log(getTableProps());

  return (
    <div>
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
            // console.log(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell);

                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
