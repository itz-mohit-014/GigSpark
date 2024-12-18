import React from "react";
import { gigsData } from "../../mocks/data";
import Table from "../../components/table/Table";
import GigsRow from "../../components/myGigs/GigsRow";
import { useNavigate } from "react-router-dom";

const MyGigs = () => {
  const navigate = useNavigate();
  const columns = [
    "Image",
    "Title",
    "Price",
    "Order",
    "Action",
  ];

  const handleAddNewGig = () => {
    navigate("/add-new-gig");
  };

  return (
    <section className="sm:p-6">
      <div className="max-w-screen-xl mx-auto p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-3xl font-bold">Gigs</h1>
          <button
            onClick={handleAddNewGig}
            className="sm:px-4 py-2 px-3 text-sm sm:text-base bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add New Gig
          </button>
        </div>
        <div className="overflow-x-auto relative">
          <Table
            data={gigsData}
            column={columns}
            Row={GigsRow}
            bgColor={"bg-blue-50"}
          />
        </div>
      </div>
    </section>
  );
};

export default MyGigs;
