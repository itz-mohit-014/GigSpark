import React from "react";
import { Chats, dummyUserInfo, gigsData, userMessagesData } from "../../mocks/data";
import Table from "../../components/table/Table";
import OrderRow from "../../components/orders/OrderRow";
import MessagesRow from "./ChatRow";

const Messages = () => {
  const columns = ["Buyer", "Last Message", "Date", "Action"];

  return (
    <section className="sm:p-6">
      <div className="max-w-screen-xl mx-auto p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-3xl font-bold">Messages</h1>
        </div>
        <div className="overflow-x-auto">
          <Table
            data={Chats}
            column={columns}
            Row={MessagesRow}
            bgColor={"bg-blue-100"}
          />
        </div>
      </div>
    </section>
  );
};

export default Messages;
