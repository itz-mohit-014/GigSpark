import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const GigsRow = ({ rowData, bgColor, index, itemList, setItemList }) => {

  const handleDeleteItem =  (id) => {
    const remaingItem = itemList.filter(item => item.id !== id);
    setItemList(remaingItem);
  }

  return (
    <tr key={rowData.id} className={index % 2 === 0 ? bgColor : "bg-white"}>
      <td className="p-4">
        <Link to={`/gig/${rowData.id}`}>
          <img
            src={rowData.images[0]}
            alt={rowData.name}
            className="w-10 h-10 object-cover rounded"
          />
        </Link>
      </td>
      <td className="p-4">
        <Link to={`/gig/${rowData.id}`} className="inline-block max-sm:max-w-28 max-w-48 whitespace-nowrap overflow-hidden text-ellipsis">{rowData?.services?.title}</Link>
      </td>
      <td className="p-4">{rowData?.services?.price}</td>
      <td className="p-4">{rowData.orders}</td>
      <td className="p-4 pl-8">
        <button className="text-red-500  hover:text-red-600" onClick={() => handleDeleteItem(rowData.id) }>
          <FaTrashAlt className="text-xl" />
        </button>
      </td>
    </tr>
  );
};

export default GigsRow;
