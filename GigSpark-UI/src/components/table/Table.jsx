import React, { useEffect, useState } from "react";

const Table = ({ data = [], setData, column, bgColor, Row }) => {
    
  return (
    <div >
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-500/50 border-b-4 border-gray-50">
          <tr className="">
            {column.map((colName, index) => (
              <th key={index} className="p-4 text-left font-medium">
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          { data?.length > 0 &&
          data.map((rowData, index) => (
            <Row
              key={rowData?._id}
              rowData={rowData}
              bgColor={bgColor}
              index={index}
              itemList={data}
              setItemList={setData}
            />
          ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default Table;
