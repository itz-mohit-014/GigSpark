import React, { useEffect, useState } from "react";
import GigCard from "./GigCard";
import SortFilter from "./SortFilter";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import { categoryCardsData, gigsData } from "../../mocks/data"; // moc data
import useUrlParse from "../../hooks/useURLParse";
import { useSetRecommendation } from "../../hooks/useSortMethods";
import { useLocation } from "react-router-dom";

const AllGigs = () => {
  const query = useUrlParse();
  const id = query.get("source");
  const { pathname } = useLocation();
  const [AllGigCards, setAllGigCards] = useState([]);
  const [GigCards, setGigCards] = useState(AllGigCards);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const data = categoryCardsData.find((item) => item.id === id);
    setCategoryInfo(data);
    setAllGigCards(useSetRecommendation(gigsData));
  }, [ pathname ]);

  if (AllGigCards.length <= 0) return <p>Loading...</p>;

  return (
    <section className="max-w-screen-xl p-4 pt-10 px-8 mx-auto bg-gray-50 pb-28">
      <Breadcrumbs
        links={[{ text: "category" }, { text: categoryInfo?.title }]}
      />
      <h1 className="font-semibold text-3xl font-primary mt-6 capitalize">
        {categoryInfo?.title}
      </h1>
      <p className="text-base text-blue-900/70 mt-0.5">
        {categoryInfo?.detailedDescription}
      </p>
      <SortFilter AllGigCards={AllGigCards} setGigCards={setGigCards} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 md:gap-y-16 py-6">
        {GigCards.length <= 0 ? (
          <p>Sorry no Gig's Available... </p>
        ) : (
          GigCards.map((card, index) => <GigCard data={card} key={index} />)
        )}
      </div>
    </section>
  );
};

export default AllGigs;
