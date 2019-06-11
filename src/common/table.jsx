import React from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const Table = props => {
  const { columns, onSort, sortColumn, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
