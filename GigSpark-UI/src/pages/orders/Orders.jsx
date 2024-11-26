import React from "react";
import { dummyUserInfo, gigsData } from "../../mocks/data";
import Table from "../../components/table/Table";
import OrderRow from "../../components/orders/OrderRow";

const Orders = () => {
  const columns = [
    "Image",
    "Title",
    "Price",
    dummyUserInfo.isSeller ? "Buyer" : "Seller",
    "Contact",
  ];

  return (
    <section className="sm:p-6">
      <div className="max-w-screen-xl mx-auto p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-3xl font-bold">Orders</h1>
        </div>
        <div className="overflow-x-auto">
          <Table
            data={gigsData}
            column={columns}
            Row={OrderRow}
            bgColor={"bg-blue-50"}
          />
        </div>
      </div>
    </section>
  );
};

export default Orders;
