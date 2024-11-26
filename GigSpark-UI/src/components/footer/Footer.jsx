import React from "react";
import { linksArray } from "../../mocks/footerLinks";
import LinkEl from "../ui/Link";

import FooterRow from "./FooterRow";

const Column = ({ data }) => {
  const { list: links } = data;
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-lg pb-2">{data.title}</p>
      {links.map((link, index) => <LinkEl key={index} href={"#"} children={link} className="text-base font-primary hover:underline underline-offset-4"/> )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="p-8 pb-3 bg-[#fbf5f5] border border-blue-950/10">
      <div className="max-w-screen-xl p-4 flex flex-wrap gap-6 gap-y-10 justify-between w-full mx-auto">
      {linksArray.map((column) => (
        <Column key={column.id} data={column} />
      ))}
      </div>
      <hr className="bg-blue-950/20 block h-[2px] mt-6 mb-2 max-w-screen-xl mx-auto"/>
      <FooterRow/>
    </footer>
  );
};

export default Footer;
