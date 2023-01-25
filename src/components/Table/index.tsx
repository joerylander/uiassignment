import React from "react";

type TableType = {
  data: any;
};

const Table: React.FC<TableType> = ({ data }) => {
  console.log(data);

  return (
    <table>
      <tbody>
        <tr>
          <th>Country</th>
          <th>Continent</th>
        </tr>

        {data?.map((country: any, index: number) => {
          return (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
