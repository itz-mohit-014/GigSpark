import React, { useEffect, useState } from "react";
import { gigsData } from "../../mocks/data";
import Table from "../../components/table/Table";
import GigsRow from "../../components/myGigs/GigsRow";
import { useNavigate } from "react-router-dom";
import { fetchMyGig } from "../../utils/gig";
import { useSelector } from "react-redux";

const MyGigs = () => {
  const navigate = useNavigate();
  
  const [myGigs, setMyGigs] = useState([]);
  const currentUser = useSelector(store => store.user?.user) 

  const columns = ["Image", "Title", "Price", "Order", "Action"];

  const handleAddNewGig = () => {
    navigate("/add-new-gig");
  };

  const fetchAllMyGigs = async () => {
    const response = await fetchMyGig()
    console.log(response)
    setMyGigs(response)
  };

  useEffect(() => {
    fetchAllMyGigs();
  }, []);

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
            data={myGigs}
            setData={setMyGigs}
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
