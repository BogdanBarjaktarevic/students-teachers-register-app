import React from "react";

const TableHead = ({ tableHeads }) => {
  const tableHeading = tableHeads.map(tableHead => {
    return (
      <th scope="col" key={tableHead}>
        {tableHead}
      </th>
    );
  });

  return (
    <thead
      className="thead-light"
      style={{ backgroundColor: "rgb(0, 104, 142)" }}
    >
      <tr>{tableHeading}</tr>
    </thead>
  );
};

export default TableHead;
