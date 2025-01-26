import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { deleteGig } from "../../utils/gig";

const GigsRow = ({ rowData, bgColor, index, itemList, setItemList }) => {

  const navigate = useNavigate();

  const handleDeleteItem =  async(id) => {
    const remaingItem = itemList.filter(item => item._id !== id);
    const isDeleted = await deleteGig(id)

    if(isDeleted){
      setItemList(remaingItem);
    }
    console.log(isDeleted);
  }

  const handleEditItem =  (id) => {
    const url = `/edit/${id}`
    navigate(url);
  }

  return (
    <tr className={index % 2 === 0 ? bgColor : "bg-white"}>
      <td className="p-4">
        <Link to={`/gig/${rowData._id}`}>
          <img
            src={rowData?.coverPicture?.url}
            alt={rowData?.title}
            className="w-10 h-10 object-cover rounded"
          />
        </Link>
      </td>
      <td className="p-4">
        <Link to={`/gig/${rowData?._id}`} className="inline-block max-sm:max-w-28 max-w-48 whitespace-nowrap overflow-hidden text-ellipsis">{rowData?.services?.serviceTitle}</Link>
      </td>
      <td className="p-4">{rowData?.services?.price}</td>
      <td className="p-4">{rowData?.sales}</td>
      <td className="p-4 pl-8 flex gap-5">
        <button className="text-red-500 p-2.5 rounded-full bg-slate-300/50 hover:text-red-600" onClick={() => handleDeleteItem(rowData?._id) }>
          <FaTrashAlt className="text-xl" />
        </button>
        <button className="text-emerald-500 p-2.5 rounded-full bg-slate-300/50 hover:text-emerald-600" onClick={() => handleEditItem(rowData?._id) }>
          <FaRegEdit className="text-xl" />
        </button>
      </td>
    </tr>
  );
};

export default GigsRow;
