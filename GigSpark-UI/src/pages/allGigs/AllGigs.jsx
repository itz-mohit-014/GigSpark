import React, { useEffect, useState } from "react";
import GigCard from "./GigCard";
import SortFilter from "./SortFilter";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import { categoryCardsData, gigsData } from "../../mocks/data"; // moc data
import useUrlParse from "../../hooks/useURLParse";
import { useSetRecommendation } from "../../hooks/useSortMethods";
import { useLocation } from "react-router-dom";
import { getCurrentCategoryWithAllGigs } from "../../utils/category";

const AllGigs = () => {
  const query = useUrlParse();
  const id = query.get("source");
  const { pathname } = useLocation();
  const [AllGigCards, setAllGigCards] = useState([]);
  const [GigCards, setGigCards] = useState(AllGigCards);
  const [categoryInfo, setCategoryInfo] = useState(null);

  const getCategoryWithGigs = async () => {
    const categoryData = await getCurrentCategoryWithAllGigs(id);
    console.log(categoryData);
    setCategoryInfo(categoryData);
    setAllGigCards(categoryData?.allGigs);
    setGigCards(categoryData?.allGigs)
    // setAllGigCards(useSetRecommendation(categoryData?.allGigs));
  };
  useEffect(() => {
    getCategoryWithGigs();
  }, [pathname]);

  if (!categoryInfo) return <p>Loading.. Shimmer Ui</p>;

  return (
    <section className="max-w-screen-xl p-4 pt-10 px-8 mx-auto bg-gray-50 pb-28">
      <Breadcrumbs
        links={[{ text: "category" }, { text: categoryInfo?.name }]}
      />
      <h1 className="font-semibold text-3xl font-primary mt-6 capitalize">
        {categoryInfo?.name}
      </h1>
      <p className="text-base text-blue-900/70 mt-0.5">
        {categoryInfo?.detailedDescription}
      </p>
      <SortFilter AllGigCards={AllGigCards} setGigCards={setGigCards} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 md:gap-y-16 py-6">
        {GigCards.length <= 0 ? (
          <p>Sorry no Gig's Available... </p>
        ) : (
          GigCards.map((card) => <GigCard data={card} key={card?._id} />)
        )}
      </div>
    </section>
  );
};

export default AllGigs;
