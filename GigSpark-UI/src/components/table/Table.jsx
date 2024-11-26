import React, { useEffect, useState } from "react";

const Table = ({ data, column, bgColor, Row }) => {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    setItemList(data);
  }, []);

  if (!itemList) return;

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
          {itemList.map((rowData, index) => (
            <Row
              key={index}
              rowData={rowData}
              bgColor={bgColor}
              index={index}
              itemList={itemList}
              setItemList={setItemList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
