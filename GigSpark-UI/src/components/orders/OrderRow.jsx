import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiImessage } from "react-icons/si";

const OrderRow = ({ rowData, bgColor, index, itemList, setItemList }) => {
  const navigate = useNavigate();

  const handleMessageUser = () => {
    navigate("/messages");
  };

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
        <button
          className="text-blue-500  hover:text-blue-600"
          onClick={handleMessageUser}
        >
          <SiImessage className="text-2xl" />
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
